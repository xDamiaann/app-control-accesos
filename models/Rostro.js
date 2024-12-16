const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rostro = sequelize.define(
    'Rostro',
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        usuario_id: { type: DataTypes.INTEGER, allowNull: false },
        modelo_biometrico: { type: DataTypes.TEXT, allowNull: false },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
        tableName: 'rostros',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    }
);

Rostro.associate = (models) => {
    Rostro.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    Rostro.hasMany(models.RostroCerradura, { foreignKey: 'rostro_id' });
};

module.exports = Rostro;
