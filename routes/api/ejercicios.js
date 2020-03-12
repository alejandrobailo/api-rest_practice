const router = require('express').Router();
const Ejercicio = require('../../models/ejercicio')

//GET http://localhost:3000/api/ejercicios
router.get('/', async (req, res) => {
    const rows = await Ejercicio.getAll();
    try {
        res.json(rows);
    } catch (error) {
        res.json(error);
    }
});


// POST http://localhost:3000/api/ejercicios/create
router.post('/create', async (req, res) => {
    const result = await Ejercicio.create(req.body)
    try {
        res.json(result);
    } catch (error) {
        res.json(error);
    };
});


// PATCH http://localhost:3000/api/ejercicios/edit:/id
router.patch('/edit/:id', async (req, res) => {
    const result = await Ejercicio.editEjercicio(req.body, req.params.id);
    if (result['affectedRows'] === 1) {
        res.json(result);
    } else {
        res.json({ error: 'El ejercicio no se ha editado' })
    };
});


//DELETE http://localhost:3000/api/ejercicios/delete
router.delete('/delete/:id', async (req, res) => {
    const result = await Ejercicio.deleteEjercicio(req.params.id);
    if (result['affectedRows'] === 1) {
        res.json(result);
    } else {
        res.json({ error: 'El ejercicio no se ha borrado' })
    };
});

module.exports = router;