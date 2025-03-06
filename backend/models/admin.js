import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        required: true,
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        required: true,
        type: Boolean,
        default: false,
    },
    rootUser: {
        required: true,
        type: Boolean,
        default: false,
    },
});

export const Admin = mongoose.model("Admin", Schema);
