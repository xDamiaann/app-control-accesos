const express = require('express');
const router = express.Router();
const historialAccesoController = require('../controllers/historialAccesoController');

router.get('/', historialAccesoController.obtenerHistorial);   // Obtener el historial de accesos

module.exports = router;
