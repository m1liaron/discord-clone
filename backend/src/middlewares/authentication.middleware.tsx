import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { StatusCodes } from 'http-status-codes';
import {AuthenticationRequest} from "../common/types/auth/auth.types";


const authentication = async (req: AuthenticationRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']; // Access authorization header using string indexing

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ error: true, message: 'Authentication invalid' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number; userId: string; name: string };

        // Ensure you await the user retrieval
        const user = await User.findById(payload.id); // Ensure this method returns a promise

        if (!user) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ error: true, message: 'Authentication invalid' });
        }

        // Assign user information to the request
        req.user = { id: payload.userId, name: payload.name };

        next();
    } catch (error) {
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ error: true, message: 'Authentication invalid' });
    }
};

export { authentication };