import { Assignment } from "../../models/study.js";

// Function to get all Assignments
export const allAssignment = async (req, res, next) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json(assignments);
    } catch (error) {
        console.error("Error fetching assignments:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get Assignments
export const getAssignments = async (req, res, next) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json(assignments);
    } catch (error) {
        console.error("Error fetching assignments:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Create Assignment
export const createAssignment = async (req, res, next) => {
    try {
        const { title, description, due_date, subject, file_path } = req.body;
        const newAssignment = new Assignment({
            title,
            description,
            due_date,
            subject,
            file_path
        });
        const savedAssignment = await newAssignment.save();
        res.status(201).json(savedAssignment);
    } catch (error) {
        console.error("Error creating assignment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Update Assignment by ID
export const updateAssignment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const updatedAssignment = await Assignment.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedAssignment) {
            return res.status(404).json({ message: "Assignment not found" });
        }
        res.status(200).json(updatedAssignment);
    } catch (error) {
        console.error("Error updating assignment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete Assignment by ID
export const deleteAssignment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedAssignment = await Assignment.findByIdAndDelete(id);
        if (!deletedAssignment) {
            return res.status(404).json({ message: "Assignment not found" });
        }
        res.status(200).json(deletedAssignment);
    } catch (error) {
        console.error("Error deleting assignment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Similar implementations for PYQs, Notes, Research Papers, and Archives CRUD operations...
