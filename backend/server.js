const express = require('express');
require('dotenv').config();
const cors = require('cors'); 
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', "OPTIONS"], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(express.json());
const contactRouter = require('./server/contact');
app.use('/api', contactRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});