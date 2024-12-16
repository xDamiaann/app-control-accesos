const notificacionService = require('../services/notificacionService');

const notificacionController = {
    obtenerNotificaciones: async (req, res) => {
        try {
            const notificaciones = await notificacionService.obtenerNotificaciones();
            res.status(200).json(notificaciones);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    },

    crearNotificacion: async (req, res) => {
        try {
            const nuevaNotificacion = await notificacionService.crearNotificacion(req.body);
            res.status(201).json(nuevaNotificacion);
        } catch (error) {
            res.status(400).json({ mensaje: error.message });
        }
    },
};

module.exports = notificacionController;
