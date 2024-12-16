const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define(
    'Usuario',
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        nombre: { type: DataTypes.STRING, allowNull: false },
        correo: { type: DataTypes.STRING, allowNull: false, unique: true },
        contraseña: { type: DataTypes.STRING, allowNull: false },
        foto_perfil: { type: DataTypes.BLOB },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
        tableName: 'usuarios',
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    }
);

Usuario.associate = (models) => {
    Usuario.hasOne(models.Rostro, { foreignKey: 'usuario_id' });
    Usuario.hasMany(models.Cerradura, { foreignKey: 'usuario_id' });
    Usuario.hasMany(models.Notificacion, { foreignKey: 'usuario_id' });
    Usuario.hasMany(models.HistorialAcceso, { foreignKey: 'usuario_id' });
};

module.exports = Usuario;
