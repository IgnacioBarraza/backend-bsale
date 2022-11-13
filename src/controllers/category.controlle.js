import { pool } from "../db.js";

export const getCategories = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM product')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

export const getCategory = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM product WHERE category = ?', [req.params.category])

        if (rows.lenght <= 0) return res.status(404).json({
            message: 'Categoria no encontrada'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}