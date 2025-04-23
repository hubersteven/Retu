const express = require('express');
const router = express.Router();
const controlador = require('../controllers/sitios.controller');

router.post('/', controlador.crearSitio);
router.get('/', controlador.obtenerSitios);
router.put('/:id', controlador.actualizarSitio);
router.delete('/:id', controlador.eliminarSitio);

module.exports = router;