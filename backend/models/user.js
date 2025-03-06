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
    course: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    otp: {
        type: Number,
        default: '',
    },
    role: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
        default: true,
    },
    root: {
        type: Boolean,
        required: true,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const User = mongoose.model("User", Schema);
