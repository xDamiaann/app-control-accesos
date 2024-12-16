const express = require('express');
const router = express.Router();
const notificacionController = require('../controllers/notificacionController');

router.get('/', notificacionController.obtenerNotificaciones);   // Obtener todas las notificaciones
router.post('/', notificacionController.crearNotificacion);      // Crear una notificación

module.exports = router;
