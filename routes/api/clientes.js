const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const Cliente = require('../../models/cliente')

//GET http://localhost:3000/api/clientes
router.get('/', async (req, res) => {
    const rows = await Cliente.getAll();
    try {
        res.json(rows);
    } catch (error) {
        res.json(error);
    }
});


// POST http://localhost:3000/api/clientes/create
router.post('/create', [
    check('dni', 'Introduce un DNI real').custom((value) => {
        return (/^\d{8}[a-zA-Z]$/).test(value);
    }),
    check(['nombre', 'apellidos', 'direccion', 'email', 'edad', 'sexo', 'cuota', 'fecha_nacimiento', 'dni'], 'Completa los campos').notEmpty()
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    };

    const result = await Cliente.create(req.body)
    res.json(result);
});


// PATCH http://localhost:3000/api/clientes/edit:/id
router.patch('/edit/:id', async (req, res) => {
    const result = await Cliente.editCliente(req.body, req.params.id);
    if (result['affectedRows'] === 1) {
        res.json(result);
    } else {
        res.json({ error: 'El cliente no se ha editado' })
    };
});


//DELETE http://localhost:3000/api/clientes/delete
router.delete('/delete', async (req, res) => {
    const result = await Cliente.deleteCliente(req.body.id);
    if (result['affectedRows'] === 1) {
        res.json(result);
    } else {
        res.json({ error: 'El cliente no se ha borrado' })
    };
});

module.exports = router;