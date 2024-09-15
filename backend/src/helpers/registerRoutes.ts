import {Express} from "express";
import { authRoute } from "../routes/routes";

const registerRoutes = (app: Express) => {
    app.use('/auth', authRoute);
};

export { registerRoutes };