import express from 'express';
import { allStudyMaterial, createStudyMaterial, getStudyMaterial, updateStudyMaterial, deleteStudyMaterial, } from '../controllers/study/studyMaterial.js';
import { allAssignment, getAssignments, createAssignment, updateAssignment, deleteAssignment, } from '../controllers/study/Assignments.js';
import { allPYQ, getPYQs, createPYQ, updatePYQ, deletePYQ, } from '../controllers/study/PYQs.js';
import { allNotes, getNotes, createNote, updateNote, deleteNote, } from '../controllers/study/Notes.js';
import { allResearchPaper, getResearchPapers, createResearchPaper, updateResearchPaper, deleteResearchPaper, } from '../controllers/study/ResearchPaper.js';
import { allArchives, getArchives, createArchive, updateArchive, deleteArchive, } from '../controllers/study/Archives.js';
import { authUser } from '../middlewares/auth.js';

export const studyMaterialRouter = express.Router();
export const assignmentRouter = express.Router();
export const pyqRouter = express.Router();
export const notesRouter = express.Router();
export const researchPaperRouter = express.Router();
export const archivesRouter = express.Router();

// Routes for Study Material
studyMaterialRouter.get('/study-material-all', authUser, allStudyMaterial);
studyMaterialRouter.post('/study-material', authUser, createStudyMaterial);
studyMaterialRouter.route('study-material/:id').get(authUser, getStudyMaterial).put(authUser, updateStudyMaterial).delete(authUser, deleteStudyMaterial);

// Routes for Assignments
assignmentRouter.get('/assignments-all', authUser, allAssignment);
assignmentRouter.post('/assignments', authUser, createAssignment);
assignmentRouter.route('/assignments/:id').get(authUser, getAssignments).put(authUser, updateAssignment).delete(authUser, deleteAssignment);

// Routes for PYQs (Previous Year Questions)
pyqRouter.get('/pyqs-all', authUser, allPYQ);
pyqRouter.post('/pyqs', authUser, createPYQ);
pyqRouter.route('/pyqs/:id').get(authUser, getPYQs).put(authUser, updatePYQ).delete(authUser, deletePYQ);


// Routes for Notes
notesRouter.get('/notes-all', authUser, allNotes);
notesRouter.post('/notes', authUser, createNote);
notesRouter.route('/notes/:id').get(authUser, getNotes).put(authUser, updateNote).delete(authUser, deleteNote);

// Routes for Research Papers
researchPaperRouter.get('/research-papers-all', authUser, allResearchPaper);
researchPaperRouter.post('/research-papers', authUser, createResearchPaper);
researchPaperRouter.route('/research-papers/:id').get(authUser, getResearchPapers).put(authUser, updateResearchPaper).delete(authUser, deleteResearchPaper);


// Routes for Archives
archivesRouter.get('/archives-all', authUser, allArchives);
archivesRouter.post('/archives', authUser, createArchive);
archivesRouter.route('/archives/:id').get(authUser, getArchives).put(authUser, updateArchive).delete(authUser, deleteArchive);