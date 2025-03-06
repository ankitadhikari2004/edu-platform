import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import { generateToken } from '../utils/generateToken.js';
import ErrorHandler from "../middlewares/error.js";

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
export const registerUser = async (req, res, next) => {
    try {
        const { username, email, password, course, college, mobileNumber, role } = req.body;

        // Check if the user already exists
        let user = await User.findOne({ email });

        if (user) return next(new ErrorHandler("User already exists", 400));

        // Create a new user instance with hashed password
        const salt = await bcrypt.genSalt(10); // Generate salt
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

        // Save the new user to the database
        user = await User.create({ username, email, password: hashedPassword, course, college, phone: mobileNumber, role, admin: false, root: false });
        res.status(201).json({
            success: true,
            message: "Register Successfully",
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};


// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email }).select('+password'); // Include password in the query result
        if (!user) return next(new ErrorHandler("User not found", 404));

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) return next(new ErrorHandler("Invalid Credentials", 400));

        generateToken(user, res, `Welcome back ${user.username}`, 200); // Pass res object to set the cookie

    } catch (error) {
        console.error(error);
        next(error);
    }
};

// @desc    Get private profile for a user
// @route   GET /api/users/profile
// @access  Private
export const getProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
};

// @desc    Create or update a user profile
// @route   POST /api/users/profile
// @access  Private
export const updateProfile = async (req, res) => {
    const { username, email, password } = req.body;
    const userFields = {};
    if (username) userFields.username = username;
    if (email) userFields.email = email;
    if (password) {
        const salt = await bcrypt.genSalt(10);
        userFields.password = await bcrypt.hash(password, salt);
    }
    try {
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        // Check existing user
        user = await User.findOne({ email: userFields.email, username: userFields.username });
        if (user && !user.equals(req.user.id)) {
            return res.status(400).json({ msg: "User already exists" });
        }
        user = await User.findByIdAndUpdate(req.user.id, { ...userFields }, { new: true });
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

// @desc    Get full profile by user ID
// @route   GET /api/users/profile/:id
// @access  Private
export const getFullProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

// @desc    Get all users
// @route   GET /api/users/all-users
// @access  Public
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.json({
            success: true,
            users,
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Logout user
// @route   POST /api/users/logout
// @access  Private
export const logoutUser = async (req, res, next) => {
    try {
        // Clear the token cookie by setting its expiration to a past date
        res.status(200).cookie('accessToken', '', {
            expires: new Date(Date.now()),
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        }).json({
            success: true,
            message: "User logged out successfully",
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Delete user
// @route   POST /api/users/delete-account
// @access  Private
export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        await User.findByIdAndDelete(req.user.id);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
