import { Router } from "express";
import { getProductos, getProducto } from "../controllers/productos.controller.js";

const router = Router()

router.get('/category/product', getProductos)
router.get('/category/product/:id', getProducto)

export default router