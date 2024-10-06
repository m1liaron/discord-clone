import {Express} from "express";
import { authRoute } from "../routes/routes";
import { AppPath } from "../common/app/AppPath";
import {userRoute} from "../routes/userRoute";
import {authentication} from "../middlewares/authentication.middleware";

const registerRoutes = (app: Express) => {
    app.use(AppPath.Auth, authRoute);
    app.use(AppPath.Users, authentication, userRoute);
};

export { registerRoutes };