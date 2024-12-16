const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Notificacion = sequelize.define(
    'Notificacion',
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        usuario_id: { type: DataTypes.INTEGER, allowNull: false },
        titulo: { type: DataTypes.STRING, allowNull: false },
        mensaje: { type: DataTypes.TEXT, allowNull: false },
        tipo: { type: DataTypes.STRING, allowNull: false }, // Ejemplo: "alerta", "informativa"
        estado: { type: DataTypes.STRING, defaultValue: 'pendiente' }, // "pendiente", "enviada", "vista"
        fecha_envio: { type: DataTypes.DATE, allowNull: true }, // Fecha en la que se envió la notificación
    },
    {
        tableName: 'notificaciones',
        timestamps: true, // Habilita createdAt y updatedAt
        createdAt: 'fecha_creacion',      // Fecha de creación del registro
        updatedAt: 'fecha_actualizacion', // Fecha de última actualización
    }
);

Notificacion.associate = (models) => {
    Notificacion.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
};

module.exports = Notificacion;
