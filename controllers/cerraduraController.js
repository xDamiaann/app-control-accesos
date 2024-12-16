const cerraduraService = require('../services/cerraduraService');

const cerraduraController = {
    obtenerCerraduras: async (req, res) => {
        try {
            const cerraduras = await cerraduraService.obtenerCerraduras();
            res.status(200).json(cerraduras);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    },

    crearCerradura: async (req, res) => {
        try {
            const nuevaCerradura = await cerraduraService.crearCerradura(req.body);
            res.status(201).json(nuevaCerradura);
        } catch (error) {
            res.status(400).json({ mensaje: error.message });
        }
    },

    actualizarCerradura: async (req, res) => {
        try {
            const cerraduraActualizada = await cerraduraService.actualizarCerradura(req.params.id, req.body);
            res.status(200).json(cerraduraActualizada);
        } catch (error) {
            res.status(404).json({ mensaje: error.message });
        }
    },

    eliminarCerradura: async (req, res) => {
        try {
            const cerraduraEliminada = await cerraduraService.eliminarCerradura(req.params.id);
            res.status(200).json(cerraduraEliminada);
        } catch (error) {
            res.status(404).json({ mensaje: error.message });
        }
    },
};

module.exports = cerraduraController;
