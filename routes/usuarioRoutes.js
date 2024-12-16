const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Definición de rutas
router.get('/', usuarioController.obtenerUsuarios);           // Obtener todos los usuarios
router.post('/', usuarioController.crearUsuario);             // Crear un usuario
router.put('/:id', usuarioController.actualizarUsuario);      // Actualizar un usuario
router.delete('/:id', usuarioController.eliminarUsuario);     // Eliminar un usuario (soft delete)

module.exports = router;
