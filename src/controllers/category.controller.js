import { pool } from "../db.js";

export const getCategories = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM category')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}

export const getCategory = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM category WHERE name = ?', [req.params.name])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Categoria no encontrada'
        })
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}