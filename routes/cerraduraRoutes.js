const express = require('express');
const router = express.Router();
const cerraduraController = require('../controllers/cerraduraController');

router.get('/', cerraduraController.obtenerCerraduras);           // Obtener todas las cerraduras
router.post('/', cerraduraController.crearCerradura);             // Crear una cerradura
router.put('/:id', cerraduraController.actualizarCerradura);      // Actualizar una cerradura
router.delete('/:id', cerraduraController.eliminarCerradura);     // Eliminar una cerradura (soft delete)

module.exports = router;
