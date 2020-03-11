const router = require('express').Router();

//  get: recuperar, post: crear, update: editar y delete: borrar
const apiClientesRouter = require('./api/clientes');
const apiEjerciciosRouter = require('./api/ejercicios');
const apiProfesoresRouter = require('./api/profesores');

router.use('/clientes', apiClientesRouter);
router.use('/ejercicios', apiEjerciciosRouter);
router.use('/profesores', apiProfesoresRouter);


module.exports = router;