import { Router } from "express";
import { getProductos, getProducto, getProductoId } from "../controllers/productos.controller.js";

const router = Router()

router.get('/product', getProductos)
router.get('/product/:category', getProducto)
router.get('/product/id/:id', getProductoId)

export default router