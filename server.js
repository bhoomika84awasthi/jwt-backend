require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// ✅ Allow only your Vercel frontend
app.use(cors({
  origin: "https://jwt-frontend-a52l.vercel.app",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/protected', require('./routes/protected'));

app.get('/', (req, res) => res.send('JWT Auth API is running ✅'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

