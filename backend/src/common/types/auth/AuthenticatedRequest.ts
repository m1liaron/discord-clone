import { Request } from "express";

interface AuthenticatedRequest extends Request {
    user: {
        id: string;
        name: string;
    };
}

export { AuthenticatedRequest };