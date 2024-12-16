const rostroService = require('../services/rostroService');

const rostroController = {
    obtenerRostros: async (req, res) => {
        try {
            const rostros = await rostroService.obtenerRostros();
            res.status(200).json(rostros);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    },

    crearRostro: async (req, res) => {
        try {
            const nuevoRostro = await rostroService.crearRostro(req.body);
            res.status(201).json(nuevoRostro);
        } catch (error) {
            res.status(400).json({ mensaje: error.message });
        }
    },
};

module.exports = rostroController;
