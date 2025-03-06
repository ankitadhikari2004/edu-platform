import { StudyMaterial } from "../../models/study.js";

// Function to get all Study Materials
export const allStudyMaterial = async (req, res) => {
    try {
        const studyMaterials = await StudyMaterial.find();
        res.status(200).json(studyMaterials);
    } catch (error) {
        console.error("Error fetching study materials:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Create Study Material
export const createStudyMaterial = async (req, res) => {
    try {
        const { title, description, author, subject, file_path } = req.body;
        const newStudyMaterial = new StudyMaterial({
            title,
            description,
            author,
            subject,
            file_path
        });
        const savedStudyMaterial = await newStudyMaterial.save();
        res.status(201).json(savedStudyMaterial);
    } catch (error) {
        console.error("Error creating study material:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get Study Material by ID
export const getStudyMaterial = async (req, res) => {
    try {
        const { id } = req.params;
        const studyMaterial = await StudyMaterial.findById(id);
        if (!studyMaterial) {
            return res.status(404).json({ message: "Study material not found" });
        }
        res.status(200).json(studyMaterial);
    } catch (error) {
        console.error("Error fetching study material:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Update Study Material by ID
export const updateStudyMaterial = async (req, res) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const updatedStudyMaterial = await StudyMaterial.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedStudyMaterial) {
            return res.status(404).json({ message: "Study material not found" });
        }
        res.status(200).json(updatedStudyMaterial);
    } catch (error) {
        console.error("Error updating study material:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete Study Material by ID
export const deleteStudyMaterial = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudyMaterial = await StudyMaterial.findByIdAndDelete(id);
        if (!deletedStudyMaterial) {
            return res.status(404).json({ message: "Study material not found" });
        }
        res.status(200).json(deletedStudyMaterial);
    } catch (error) {
        console.error("Error deleting study material:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Similar implementations for other functions (getAssignments, createAssignment, updateAssignment, etc.)
