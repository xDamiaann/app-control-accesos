const Notificacion = require('../models/Notificacion');

const notificacionService = {
    obtenerNotificaciones: async () => {
        return await Notificacion.findAll();
    },

    crearNotificacion: async (datos) => {
        return await Notificacion.create(datos);
    },
};

module.exports = notificacionService;
