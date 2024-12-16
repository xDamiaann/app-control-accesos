const historialAccesoService = require('../services/historialAccesoService');

const historialAccesoController = {
    obtenerHistorial: async (req, res) => {
        try {
            const historial = await historialAccesoService.obtenerHistorial();
            res.status(200).json(historial);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    },
};

module.exports = historialAccesoController;
