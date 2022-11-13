import { Router } from "express";
import { getProductos, getProducto } from "../controllers/productos.controller.js";

const router = Router()

router.get('/product', getProductos)
router.get('/product/:id', getProducto)

export default router