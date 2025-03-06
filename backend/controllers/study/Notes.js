import { Notes } from "../../models/study.js";

// Function to get all Notes
export const allNotes = async (req, res, next) => {
    try {
        const notes = await Notes.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get Notes
export const getNotes = async (req, res, next) => {
    try {
        const notes = await Notes.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Create Note
export const createNote = async (req, res, next) => {
    try {
        const { title, content, author, subject, file_path } = req.body;
        const newNote = new Notes({
            title,
            content,
            author,
            subject,
            file_path
        });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Update Note by ID
export const updateNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const updatedNote = await Notes.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete Note by ID
export const deleteNote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedNote = await Notes.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(deletedNote);
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Similar implementations for Research Papers and Archives CRUD operations...

