import express from 'express';
import { createRoom, getAllRooms } from '../Controllers/roomController.js';

const router = express.Router();

router.post("/", createRoom);
router.get("/", getAllRooms);

export default router;          