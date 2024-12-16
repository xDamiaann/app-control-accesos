const Cerradura = require('../models/Cerradura');

const cerraduraService = {
    obtenerCerraduras: async () => {
        return await Cerradura.findAll();
    },

    obtenerCerraduraPorId: async (id) => {
        return await Cerradura.findByPk(id);
    },

    crearCerradura: async (datos) => {
        return await Cerradura.create(datos);
    },

    actualizarCerradura: async (id, datos) => {
        const cerradura = await Cerradura.findByPk(id);
        if (!cerradura) throw new Error('Cerradura no encontrada.');
        return await cerradura.update(datos);
    },

    eliminarCerradura: async (id) => {
        const cerradura = await Cerradura.findByPk(id);
        if (!cerradura) throw new Error('Cerradura no encontrada.');
        cerradura.estado = false; // Soft delete
        return await cerradura.save();
    },
};

module.exports = cerraduraService;
