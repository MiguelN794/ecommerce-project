const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config');
const { jwtCheck } = require('./middlewares/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3000', // Cambia esto a la URL de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', jwtCheck, cartRoutes);
app.use('/api/users', jwtCheck, userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
