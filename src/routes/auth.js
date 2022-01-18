
import express from 'express';

const router = express.Router();

import { register, login } from "../controllers/authContoller";

//Regsitration
router.post("/register", register);

//Regsitration
router.post("/login", login);

export default router;
