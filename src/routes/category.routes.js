import { Router } from "express";
import { ping } from "../controllers/category.controlle.js";


const router = Router()

router.get('/ping', ping)

export default router