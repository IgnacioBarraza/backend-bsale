import express from 'express'
import productsRoutes from "./routes/productos.routes.js";
import categoryRoutes from "./routes/category.routes.js";

const app = express()

app.use(express.json())

app.use('/api',productsRoutes)
app.use('/api',categoryRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'route not found'
    })
})

export default app;