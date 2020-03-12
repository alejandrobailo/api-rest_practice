const router = require('express').Router();
const Profesor = require('../../models/profesor');

//GET http://localhost:3000/api/profesores
router.get('/', async (req, res) => {
    const rows = await Profesor.getAll();
    try {
        res.json(rows);
    } catch (error) {
        res.json(error);
    };
});

module.exports = router; 