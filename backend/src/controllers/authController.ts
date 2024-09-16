import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../models/User'; // Adjust import path if needed

interface UserData {
    username: string;
    displayName: string;
    dateOfBirth: Date;
    email: string;
    password: string;
}

// Register function with typed request and response
const register = async (req: Request, res: Response) => {
    const userData = req.body as UserData;

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
export {
    register
};
