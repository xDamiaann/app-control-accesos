const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cerradura = sequelize.define(
    'Cerradura',
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        usuario_id: { type: DataTypes.INTEGER, allowNull: false },
        nuki_id: { type: DataTypes.STRING, allowNull: false, unique: true },
        nombre: { type: DataTypes.STRING, allowNull: false },
        estado_cerradura: { type: DataTypes.BOOLEAN, defaultValue: false },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
        tableName: 'cerraduras',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    }
);

Cerradura.associate = (models) => {
    Cerradura.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    Cerradura.hasMany(models.RostroCerradura, { foreignKey: 'cerradura_id' });
    Cerradura.hasMany(models.HistorialAcceso, { foreignKey: 'cerradura_id' });
};

module.exports = Cerradura;
