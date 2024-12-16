const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const HistorialAcceso = sequelize.define(
    'HistorialAcceso',
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        cerradura_id: { type: DataTypes.INTEGER, allowNull: false },
        usuario_id: { type: DataTypes.INTEGER, allowNull: false },
        fecha: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }, // Fecha del intento de acceso
        resultado: { type: DataTypes.BOOLEAN, allowNull: false }, // Éxito o fallo
        mensaje: { type: DataTypes.TEXT }, // Mensaje descriptivo del intento
    },
    {
        tableName: 'historial_accesos',
        timestamps: false, // No necesitamos createdAt ni updatedAt
    }
);

HistorialAcceso.associate = (models) => {
    HistorialAcceso.belongsTo(models.Cerradura, { foreignKey: 'cerradura_id' });
    HistorialAcceso.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
};

module.exports = HistorialAcceso;
