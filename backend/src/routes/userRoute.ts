import express from "express";

const router = express.Router();
import { getUser } from '../controllers/userController'

router.route('/').get(getUser);

export { router as userRoute };