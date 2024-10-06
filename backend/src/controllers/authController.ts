import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../models/User';
import {RegisterRequest} from "../common/types/auth/RegisterType";
import {LoginRequest} from "../common/types/auth/LoginType"; // Adjust import path if needed
import bcrypt from 'bcrypt';
import {AuthenticatedRequest} from "../common/types/auth/AuthenticatedRequest";

interface UserData {
    username: string;
    displayName: string;
    dateOfBirth: Date;
    email: string;
    password: string;
}

const register = async (req: Request, res: Response) => {
    const userData = req.body as RegisterRequest;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            return res.status(StatusCodes.CONFLICT).json({
                error: true,
                message: 'User already exists',
            });
        }

        // Create a new user
        const newUser = await User.create(userData);

        // Extract required properties
        const { username, displayName, dateOfBirth, email } = newUser.toObject() as UserData;

        // Send the response
        res.status(StatusCodes.CREATED).json({ username, displayName, dateOfBirth, email });
    } catch (error) {
        // Handle errors
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: true,
            message: error instanceof Error ? error.message : 'Registration failed. Please try again later.',
        });
    }
};

const login = async (req: Request, res: Response) => {
    try {
        const { email, password} = req.body as LoginRequest;
        if(!email || !password) {
            res.status(StatusCodes.CONFLICT).json({ error: true, message: 'Incorrect email or password' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ error: true, message: 'Invalid credentials' });
        }
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );
        if(!isPasswordCorrect) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ error: true, message: 'Invalid credentials' });
        }
        const token = user.createJWT();
        const { email: userEmail, username } = user;
        res.status(StatusCodes.CREATED).json({ user: { email: userEmail, username }, token})
    } catch (error) {
        // Handle errors
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: true,
            message: error instanceof Error ? error.message : 'Login failed. Please try again later.',
        });
    }
}

export {
    register,
    login,
};
