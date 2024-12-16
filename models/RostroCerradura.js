const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const RostroCerradura = sequelize.define(
    'RostroCerradura',
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        rostro_id: { type: DataTypes.INTEGER, allowNull: false },
        cerradura_id: { type: DataTypes.INTEGER, allowNull: false },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
        tableName: 'rostros_cerraduras',
        timestamps: true,
        createdAt: 'fecha_asignacion',
        updatedAt: 'fecha_actualizacion',
    }
);

RostroCerradura.associate = (models) => {
    RostroCerradura.belongsTo(models.Rostro, { foreignKey: 'rostro_id' });
    RostroCerradura.belongsTo(models.Cerradura, { foreignKey: 'cerradura_id' });
};

module.exports = RostroCerradura;
