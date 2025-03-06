import { Archives } from "../../models/study.js";

// Function to get all Archives
export const allArchives = async (req, res, next) => {
    try {
        const archives = await Archives.find();
        res.status(200).json(archives);
    } catch (error) {
        console.error("Error fetching archives:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Create Archive
export const createArchive = async (req, res, next) => {
    try {
        const { title, description, category, file_path } = req.body;
        const newArchive = new Archives({
            title,
            description,
            category,
            file_path
        });
        const savedArchive = await newArchive.save();
        res.status(201).json(savedArchive);
    } catch (error) {
        console.error("Error creating archive:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get Archives
export const getArchives = async (req, res, next) => {
    try {
        const archives = await Archives.find();
        res.status(200).json(archives);
    } catch (error) {
        console.error("Error fetching archives:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Update Archive by ID
export const updateArchive = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const updatedArchive = await Archives.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedArchive) {
            return res.status(404).json({ message: "Archive not found" });
        }
        res.status(200).json(updatedArchive);
    } catch (error) {
        console.error("Error updating archive:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete Archive by ID
export const deleteArchive = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedArchive = await Archives.findByIdAndDelete(id);
        if (!deletedArchive) {
            return res.status(404).json({ message: "Archive not found" });
        }
        res.status(200).json(deletedArchive);
    } catch (error) {
        console.error("Error deleting archive:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
