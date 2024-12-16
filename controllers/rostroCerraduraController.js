const rostroCerraduraService = require('../services/rostroCerraduraService');

const rostroCerraduraController = {
    asignarRostroACerradura: async (req, res) => {
        try {
            const asignacion = await rostroCerraduraService.asignarRostroACerradura(req.body);
            res.status(201).json(asignacion);
        } catch (error) {
            res.status(400).json({ mensaje: error.message });
        }
    },
};

module.exports = rostroCerraduraController;
