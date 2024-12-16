const HistorialAcceso = require('../models/HistorialAcceso');

const historialAccesoService = {
    obtenerHistorial: async () => {
        return await HistorialAcceso.findAll();
    },
};

module.exports = historialAccesoService;
