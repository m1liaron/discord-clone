import {Request} from "express";

interface AuthenticationRequest extends Request {
    user?: {
        id: string;
        name: string;
    };
}

export { AuthenticationRequest }