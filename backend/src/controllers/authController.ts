import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../models/User'; // Adjust import path if needed

// Define the shape of the user data
interface UserData {
    username: string;
    displayName: string;
    dateOfBirth: string;
    email: string;
    password: string;
}

// Define the shape of the response object
interface ResponseData {
    error?: boolean;
    message?: string;
}

interface SuccessResponse {
    username: string;
    displayName: string;
    dateOfBirth: string;
    email: string;
}

// Register function with typed request and response
const register = async (req: Request<0, 0, UserData>, res: Response<SuccessResponse | ResponseData>) => {
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(StatusCodes.CONFLICT).json({
                error: true,
                message: 'User already exists',
            });
        }

        // Create a new user
        const newUser = await User.create(req.body);

        // Destructure password and omit it from the response
        const { password, ...mainData } = newUser.toObject(); // Convert mongoose document to plain object

        // Send the response
        res.status(StatusCodes.CREATED).json(mainData as SuccessResponse);
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
