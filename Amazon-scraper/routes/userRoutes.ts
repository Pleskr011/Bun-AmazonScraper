import express from "express";
import { getProducts } from "../controllers/userController";

const router = express.Router();

router.get("/scrape/:keyword", getProducts)

export default router;