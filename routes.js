const express = require('express');
const router = express.Router();

const reporte_articulos = require('./componentes/reporteArticulo/controllers/reporte_articulos_controlador')
const inicio = require('./componentes/inicio/controllers/inicio_controlador')

router.get('/reporte_articulos', reporte_articulos.home);

router.get('/', inicio.home)

module.exports = router;