import express from "express";
const router = express.Router();

import { getUserData } from "../controllers/users.js";

router.get("/", getUserData);

export default router;
