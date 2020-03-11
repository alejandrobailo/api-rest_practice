const router = require('express').Router();
const Cliente = require('../../models/cliente')

//GET http://localhost:3000/api/clientes
router.get('/', async (req, res) => {
    const rows = await Cliente.getAll();
    try {
        res.json(rows);
    } catch (error) {
        res.json(error);
    }
})


// POST http://localhost:3000/api/clientes/create
router.post('/create', async (req, res) => {
    const result = await Cliente.create(req.body)
    if (result['affectedRows'] === 1) {
        res.json(result);
    } else {
        res.json({ error: 'El cliente no se ha insertado' })
    }
})


// PUT http://localhost:3000/api/clientes/edit
router.put('/edit', async (req, res) => {
    const result = await Cliente.editCliente(req.body);
    if (result['affectedRows'] === 1) {
        res.json(result);
    } else {
        res.json({ error: 'El cliente no se ha editado' })
    }
})


//DELETE http://localhost:3000/api/clientes/delete
router.delete('/delete', async (req, res) => {
    const result = await Cliente.deleteCliente(req.body.id);
    if (result['affectedRows'] === 1) {
        res.json(result);
    } else {
        res.json({ error: 'El cliente no se ha borrado' })
    }
})

module.exports = router;