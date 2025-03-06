import express from 'express';
import { adminLogin, adminCreate, getAdmin, adminLogout, getAllAdmins } from '../controllers/admin.js';
import { verifyAdmin } from '../middlewares/auth.js';

export const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.post("/create", adminCreate);
adminRouter.get('/profile', verifyAdmin, getAdmin);
adminRouter.get('/all-admins', verifyAdmin, getAllAdmins);
adminRouter.get('/logout', verifyAdmin, adminLogout);

