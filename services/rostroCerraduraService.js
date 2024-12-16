const RostroCerradura = require('../models/RostroCerradura');

const rostroCerraduraService = {
    asignarRostroACerradura: async (datos) => {
        return await RostroCerradura.create(datos);
    },
};

module.exports = rostroCerraduraService;
