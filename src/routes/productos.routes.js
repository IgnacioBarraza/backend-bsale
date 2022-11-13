import { Router } from "express";
import { getProductos, getProducto } from "../controllers/productos.controller.js";

const router = Router()

router.get('/product', getProductos)
router.get('/product/:category', getProducto)

export default router