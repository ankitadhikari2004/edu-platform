import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "../models/user.js";
import { Admin } from '../models/admin.js';
import ErrorHandler from './error.js';

export const authUser = async (req, res, next) => {
    const { accessToken } = req.cookies;
    if (!accessToken) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized - Missing or invalid token"
        });
    }

    try {
        const decode = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.user = await User.findById(decode._id);
        if (!req.user) return next(new ErrorHandler("Couldn't find user", 403));
        next();

    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Server Error",
        });
    }
};

export const verifyAdmin = async (req, res, next) => {
    const { adminToken } = req.cookies;
    // If the user is not an admin, send a 401 response
    if (!adminToken) {
        return res.status(401).send({
            success: false,
            message: "Unauthorized Admin Credentials!"
        });
    };
    try {
        const adminDecoded = jwt.verify(adminToken, process.env.ADMIN_JWT_SECRET);
        
        req.user = await Admin.findById(adminDecoded._id);
        if (!req.user.isAdmin) return next(new ErrorHandler("Unauthorized Admin!", 403));
        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Server Error",
        });
    }
}

