import { Router } from "express";
import { getProductos, getProducto, getProductoUrl } from "../controllers/productos.controller.js";

const router = Router()

router.get('/product', getProductos)
router.get('/product/:category', getProducto)
router.get('/product/:category/:url_image', getProductoUrl)

export default router