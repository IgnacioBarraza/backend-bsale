import { Router } from "express";
import { getCategories, getCategory } from "../controllers/category.controller.js";

const router = Router()

router.get('/categories', getCategories)
router.get('/categories/:category', getCategory)

export default router