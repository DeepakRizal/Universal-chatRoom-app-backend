import express from "express";
import { login, register } from "../controllers/authControllers.js";
import xss from "xss-clean";

const router = express.Router();

router.use(xss());

router.post("/register", register);
router.post("/login", login);

export default router;
