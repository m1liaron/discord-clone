import express from "express";

const router = express.Router();

import { register } from '../controllers/authController';

router.route('/register').post(register);
router.route('/login').post();

export { router as authRoute };