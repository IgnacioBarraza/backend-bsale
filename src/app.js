import express from 'express'
import productsRoutes from "./routes/productos.routes.js";
import categoryRoutes from "./routes/category.routes.js";

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(express.json())

app.use(productsRoutes)
app.use(categoryRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'route not found'
    })
})

export default app;