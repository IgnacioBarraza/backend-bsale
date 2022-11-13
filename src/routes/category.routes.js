import { Router } from "express";
import { getCategories, getCategory } from "../controllers/category.controller.js";

const router = Router()

router.get('/category', getCategories)
router.get('/category/:name', getCategory)

export default router