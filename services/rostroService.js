const Rostro = require('../models/Rostro');

const rostroService = {
    obtenerRostros: async () => {
        return await Rostro.findAll();
    },

    crearRostro: async (datos) => {
        return await Rostro.create(datos);
    },
};

module.exports = rostroService;
