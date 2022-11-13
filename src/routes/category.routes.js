import { Router } from "express";
import { getCategories, getCategory } from "../controllers/category.controlle.js";

const router = Router()

router.get('/category', getCategories)
router.get('/category/:category', getCategory)

export default router