import {Express} from "express";
import { authRoute } from "../routes/routes";
import { AppPath } from "../common/app/AppPath";

const registerRoutes = (app: Express) => {
    app.use(AppPath.Auth, authRoute);
};

export { registerRoutes };