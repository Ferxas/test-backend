const cors = require('cors');
const express = require('express');
const connectDB = require('./config/database');
const { port } = require('./config/environment');
const clientRoutes = require('./routes/clientRoutes');

const app = express();

// const corsOptions = {   
//     origin: 'https://frontend-garment-store.vercel.app', // Origen permitido
//     credentials: true, // Permite el envío de cookies o credenciales
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
//     allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
// };

// app.use(cors(corsOptions));
app.use(express.json());
app.use(cors({
    origin: 'https://new-front-ecru.vercel.app',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
// app.options('*', cors(corsOptions)); // Maneja preflight requests
app.get('/api/rest', (req, res) => {
    res.json({message: "CORS working!!!"});
})

connectDB();

app.get('/', (req, res) => {
    res.send('Bienvenido a la API tienda de ropa');
});

app.use('/api/clients', clientRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));