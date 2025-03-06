import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    sender: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export const Message = mongoose.model("message", Schema);
