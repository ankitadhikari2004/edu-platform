import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export const Notification = mongoose.model("notification", Schema);
