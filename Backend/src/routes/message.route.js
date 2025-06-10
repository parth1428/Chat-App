import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar,getMessages,sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

// Put specific routes before parameterized routes
router.get("/user", protectRoute, getUsersForSidebar);
router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;