import { ResearchPaper } from "../../models/study.js";

// Function to get all Research Papers
export const allResearchPaper = async (req, res, next) => {
    try {
        const researchPapers = await ResearchPaper.find();
        res.status(200).json(researchPapers);
    } catch (error) {
        console.error("Error fetching research papers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Get Research Papers
export const getResearchPapers = async (req, res, next) => {
    try {
        const researchPapers = await ResearchPaper.find();
        res.status(200).json(researchPapers);
    } catch (error) {
        console.error("Error fetching research papers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Create Research Paper
export const createResearchPaper = async (req, res, next) => {
    try {
        const { title, authors, abstract, publication_year, subject, file_path } = req.body;
        const newResearchPaper = new ResearchPaper({
            title,
            authors,
            abstract,
            publication_year,
            subject,
            file_path
        });
        const savedResearchPaper = await newResearchPaper.save();
        res.status(201).json(savedResearchPaper);
    } catch (error) {
        console.error("Error creating research paper:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Update Research Paper by ID
export const updateResearchPaper = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const updatedResearchPaper = await ResearchPaper.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedResearchPaper) {
            return res.status(404).json({ message: "Research paper not found" });
        }
        res.status(200).json(updatedResearchPaper);
    } catch (error) {
        console.error("Error updating research paper:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Delete Research Paper by ID
export const deleteResearchPaper = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedResearchPaper = await ResearchPaper.findByIdAndDelete(id);
        if (!deletedResearchPaper) {
            return res.status(404).json({ message: "Research paper not found" });
        }
        res.status(200).json(deletedResearchPaper);
    } catch (error) {
        console.error("Error deleting research paper:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Similar implementations for Archives CRUD operations...
