import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { userRouter } from './routes/user.js';
import { adminRouter } from './routes/admin.js';
import {
    studyMaterialRouter, assignmentRouter, pyqRouter, notesRouter, researchPaperRouter, archivesRouter
} from './routes/study.js';
import { errorMiddleware } from './middlewares/error.js';

export const app = express();

config({
    path: "./data/config.env",
});

app.use(express.json());
app.use(cookieParser());

// Define the whitelist of allowed origins without double quotes
const allowedOrigins = ['https://educates.netlify.app', 'https://admin-educates.netlify.app'];

// Enable CORS middleware with the configured options
app.use(cors({
    origin: (origin, callback) => {
        // Use req.header('Origin') instead of origin directly
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use("/api/users", userRouter);
app.use("/api/auth/admin", adminRouter);
app.use("/api/study-material", studyMaterialRouter);
app.use("/api/assignments", assignmentRouter);
app.use("/api/pyqs", pyqRouter);
app.use("/api/notes", notesRouter);
app.use("/api/research-papers", researchPaperRouter);
app.use("/api/archives", archivesRouter);

app.get("/", (req, res) => {
    res.send("Educate Working");
});

app.use(errorMiddleware);