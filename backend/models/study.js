import mongoose from "mongoose";

// Define schema for Study Material
const StudyMaterialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    file_path: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const StudyMaterial = mongoose.model("StudyMaterial", StudyMaterialSchema);

// Define schema for Assignments
const AssignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    due_date: {
        type: Date,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    file_path: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const Assignment = mongoose.model("Assignment", AssignmentSchema);

// Define schema for PYQs (Previous Year Questions)
const PYQSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const PYQ = mongoose.model("PYQ", PYQSchema);

// Define schema for Notes
const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    file_path: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const Notes = mongoose.model("Notes", NotesSchema);

// Define schema for Research Papers
const ResearchPaperSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: [String],
        required: true,
    },
    abstract: {
        type: String,
        required: true,
    },
    publication_year: {
        type: Number,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    file_path: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const ResearchPaper = mongoose.model("ResearchPaper", ResearchPaperSchema);

const ArchivesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    file_path: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const Archives = mongoose.model("Archives", ArchivesSchema);

