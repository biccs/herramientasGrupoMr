const express = require('express');
const router = express.Router();

const reporte_articulos = require('./reporteArticulo/controllers/reporte_articulos_controlador')

router.get('/reporte_articulos', reporte_articulos.home);

module.exports = router;