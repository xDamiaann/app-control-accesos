const express = require('express');
const router = express.Router();
const rostroController = require('../controllers/rostroController');

router.get('/', rostroController.obtenerRostros);   // Obtener todos los rostros
router.post('/', rostroController.crearRostro);     // Crear un rostro

module.exports = router;
