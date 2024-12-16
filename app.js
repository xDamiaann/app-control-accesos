const express = require('express');
const sequelize = require('./config/db'); // Configuración de la base de datos
const app = express();

// Middleware
app.use(express.json());

// Importar rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const cerraduraRoutes = require('./routes/cerraduraRoutes');
const rostroRoutes = require('./routes/rostroRoutes');
const historialAccesoRoutes = require('./routes/historialAccesoRoutes');
const notificacionRoutes = require('./routes/notificacionRoutes');
const rostroCerraduraRoutes = require('./routes/rostroCerraduraRoutes');

// Configurar rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/cerraduras', cerraduraRoutes);
app.use('/api/rostros', rostroRoutes);
app.use('/api/historial-accesos', historialAccesoRoutes);
app.use('/api/notificaciones', notificacionRoutes);
app.use('/api/rostros-cerraduras', rostroCerraduraRoutes);

// Inicializar la base de datos
const initDB = async () => {
    try {
        // Verificar conexión a la base de datos
        await sequelize.authenticate();
        console.log('✅ Conexión exitosa a la base de datos');
        console.log('⚠️ Sincronización de modelos omitida: las tablas ya existen.');
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error);
    }
};

initDB();

// Configurar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
