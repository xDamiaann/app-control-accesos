const usuarioService = require('../services/usuarioService');

const usuarioController = {
    obtenerUsuarios: async (req, res) => {
        try {
            const usuarios = await usuarioService.obtenerUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    },

    crearUsuario: async (req, res) => {
        try {
            const nuevoUsuario = await usuarioService.crearUsuario(req.body);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            res.status(400).json({ mensaje: error.message });
        }
    },

    actualizarUsuario: async (req, res) => {
        try {
            const usuarioActualizado = await usuarioService.actualizarUsuario(req.params.id, req.body);
            res.status(200).json(usuarioActualizado);
        } catch (error) {
            res.status(404).json({ mensaje: error.message });
        }
    },

    eliminarUsuario: async (req, res) => {
        try {
            const usuarioEliminado = await usuarioService.eliminarUsuario(req.params.id);
            res.status(200).json(usuarioEliminado);
        } catch (error) {
            res.status(404).json({ mensaje: error.message });
        }
    },
};

module.exports = usuarioController;
