import bcrypt from "bcrypt";
import { Admin } from "../models/admin.js";
import { AdminToken } from '../utils/generateToken.js';
import ErrorHandler from "../middlewares/error.js";

// @desc    Create a new admin
// @route   POST /api/auth/admin/create
// @access  Public
export const adminCreate = async (req, res, next) => {
    try {
        const { rootAdminUsername, rootAdminPassword, username, email, password, isAdmin, rootUser } = req.body;

        if (!username || !email || !password) {
            return next(new ErrorHandler("Username, email, and password are required", 400));
        }

        const rootAdmin = await Admin.findOne({ username: rootAdminUsername, password: rootAdminPassword });
        if (!rootAdmin) {
            return next(new ErrorHandler(`Invalid Admin Credentials`, 400));
        }
        if (!rootAdmin.isAdmin || !rootAdmin.rootUser) {
            return next(new ErrorHandler(`You must be logged in as a Root Administrator to create an account`, 400));
        }

        // Checking if the provided username already exists
        let existingUser = await Admin.findOne({ username });
        if (existingUser) {
            return next(new ErrorHandler(`The username ${username} already exists`, 409));
        }
        // Hashing the password with a salt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Create a new user with provided isAdmin and rootUser values
        const admin = await new Admin({
            username,
            email,
            password: hashedPassword,
            isAdmin: isAdmin || false, // Set to false if not provided in the request body
            rootUser: rootUser || false, // Set to false if not provided in the request body
        }).save();

        // Return jwt token for the newly created user
        AdminToken(admin, res, "Account has been created successfully!", 201);

    } catch (error) {
        console.log('Error creating admin:', error);
        next(error);
    }
};

// @desc    Authenticate a admin & get token
// @route   POST /api/auth/admin/login
// @access  Public
export const adminLogin = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next(new ErrorHandler("Username and password are required", 400));
    }
    try {
        const admin = await Admin.findOne({ username }).select('+password');
        if (!admin) return next(new ErrorHandler("User not found", 401));

        const isPasswordMatch = await bcrypt.compare(password, admin.password);

        if (!isPasswordMatch) return next(new ErrorHandler("Invalid credentials ", 401));

        // Create token for authenticated admin
        AdminToken(admin, res, `Welcome ${admin.username}!`, 200);
    } catch (error) {
        next(error);
    }
}

// @desc    Logout user
// @route   GET /api/auth/admin/logout
// @access  Private
export const adminLogout = async (req, res, next) => {
    try {
        res.status(200).cookie('adminToken', '', {
            expires: new Date(Date.now()),
            sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Develpoment" ? false : true,
        }).json({
            success: true,
            message: "Successfully logged out!",
        });
    } catch (error) {
        next(error);
    }
};

export const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.status(200).json({
            success: true,
            admins,
        });
    } catch (error) {
        console.error("Error fetching admins:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

// @desc    Get private profile of the current admin
// @route   GET /api/auth/admin/profile
// @access  Private
export const getAdmin = (req, res) => {
    res.status(200).json({
        success: true,
        admin: req.user,
    });
}