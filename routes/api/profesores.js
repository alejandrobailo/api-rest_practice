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

// POST http://localhost:3000/api/profesores/create
router.post('/create', async (req, res) => {
    const result = await Profesor.create(req.body);
    try {
        res.json(result);
    } catch (error) {
        res.json(error);
    };
});

// PATCH http://localhost:3000/api/profesores/edit:/id
router.patch('/edit/:id', async (req, res) => {
    const result = await Profesor.editProfesor(req.params.id, req.body);
    if (result['affectedRows'] === 1) {
        res.json(result);
    } else {
        res.json({ error: 'El profesor no se ha editado' })
    };
});

//DELETE http://localhost:3000/api/profesores/delete
router.delete('/delete/:id', function (req, res) {
    Profesor.deleteProfesor(req.params.id)
        .then(function (result) {
            res.json(result);
        }).catch(function () {
            res.json('Ha habido un error al borrar')
        });
});
//Esta ultima con function y then catch por probar


module.exports = router; 