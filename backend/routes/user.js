import express from 'express';
import { registerUser, loginUser, getProfile, updateProfile, getFullProfile, getUsers, logoutUser, deleteUser } from '../controllers/user.js';
import { authUser } from '../middlewares/auth.js';

export const userRouter = express.Router();

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
userRouter.post('/register', registerUser);

// @desc    Authenticate user & get token
// @route   POST /api/users/login
// @access  Public
userRouter.post('/login', loginUser);

// @desc    Create or update a user profile
// @route   POST /api/users/profile
// @access  Private
userRouter.put('/update-profile', authUser, updateProfile);

// @desc    Get private profile for a user
// @route   GET /api/users/profile
// @access  Private
userRouter.get('/profile', authUser, getProfile);

// @desc    Get full profile by user ID
// @route   GET /api/users/profile/:id
// @access  Private
userRouter.get('/profile/:id', authUser, getFullProfile);

// @desc    Get all users
// @route   GET /api/users/all-users
// @access  Public
userRouter.get('/all-users', authUser, getUsers);

// @desc    Logout user
// @route   GET /api/users/logout
// @access  Private
userRouter.get('/logout', authUser, logoutUser);

// @desc    Delete user account
// @route   DELETE /api/users/delete-account
// @access  Private
userRouter.delete('/delete-account', authUser, deleteUser);