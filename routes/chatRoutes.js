import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  deleteMessage,
  fetchMessages,
  postMessage,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/messages", authMiddleware, postMessage);
router.get("/messages", authMiddleware, fetchMessages);
router.delete("/messages/:messageId", authMiddleware, deleteMessage);

export default router;
