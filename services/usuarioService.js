const Usuario = require('../models/Usuario');

const usuarioService = {
    obtenerUsuarios: async () => {
        return await Usuario.findAll();
    },

    obtenerUsuarioPorId: async (id) => {
        return await Usuario.findByPk(id);
    },

    crearUsuario: async (datos) => {
        const existeCorreo = await Usuario.findOne({ where: { correo: datos.correo } });
        if (existeCorreo) {
            throw new Error('El correo electrónico ya está registrado.');
        }
        return await Usuario.create(datos);
    },

    actualizarUsuario: async (id, datos) => {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) throw new Error('Usuario no encontrado.');
        return await usuario.update(datos);
    },

    eliminarUsuario: async (id) => {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) throw new Error('Usuario no encontrado.');
        usuario.estado = false; // Soft delete
        return await usuario.save();
    },
};

module.exports = usuarioService;
