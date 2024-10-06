import {Response} from "express";
import {StatusCodes} from "http-status-codes";
import {AuthenticationRequest} from "../common/types/auth/auth.types";

const getUser = async (req: AuthenticationRequest, res: Response) => {
    try {
        const userId = req?.user?.id;

        res.status(StatusCodes.OK).json({ userId });
    } catch(error) {
        // Handle errors
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: true,
            message: error instanceof Error ? error.message : 'Getting user failed. Please try again later.',
        });
    }
}

export { getUser };