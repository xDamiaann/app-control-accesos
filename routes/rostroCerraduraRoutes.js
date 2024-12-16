const express = require('express');
const router = express.Router();
const rostroCerraduraController = require('../controllers/rostroCerraduraController');

router.post('/', rostroCerraduraController.asignarRostroACerradura);  // Asignar un rostro a una cerradura

module.exports = router;
