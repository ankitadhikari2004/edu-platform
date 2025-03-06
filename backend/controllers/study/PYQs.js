import { PYQ } from "../../models/study.js";

// Function to get all PYQs
export const allPYQ = async (req, res, next) => {
    try {
        const pyqs = await PYQ.find();
        res.status(200).json(pyqs);
    } catch (error) {
        console.error("Error fetching PYQs:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get PYQs
export const getPYQs = async (req, res, next) => {
    try {
        const pyqs = await PYQ.find();
        res.status(200).json(pyqs);
    } catch (error) {
        console.error("Error fetching PYQs:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Create PYQ
export const createPYQ = async (req, res, next) => {
    try {
        const { question, answer, subject, year } = req.body;
        const newPYQ = new PYQ({
            question,
            answer,
            subject,
            year
        });
        const savedPYQ = await newPYQ.save();
        res.status(201).json(savedPYQ);
    } catch (error) {
        console.error("Error creating PYQ:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Update PYQ by ID
export const updatePYQ = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const updatedPYQ = await PYQ.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedPYQ) {
            return res.status(404).json({ message: "PYQ not found" });
        }
        res.status(200).json(updatedPYQ);
    } catch (error) {
        console.error("Error updating PYQ:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete PYQ by ID
export const deletePYQ = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPYQ = await PYQ.findByIdAndDelete(id);
        if (!deletedPYQ) {
            return res.status(404).json({ message: "PYQ not found" });
        }
        res.status(200).json(deletedPYQ);
    } catch (error) {
        console.error("Error deleting PYQ:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Similar implementations for Notes, Research Papers, and Archives CRUD operations...
