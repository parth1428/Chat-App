import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

// Specific routes first
router.get("/user", protectRoute, getUsersForSidebar);

// Parameterized routes with explicit parameter names
router.get("/:userId/messages", protectRoute, getMessages);
router.post("/:userId/send", protectRoute, sendMessage);

export default router;