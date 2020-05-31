const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false}))

app.use('/', (req,res) => res.send('Äpi is working'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running on ${PORT}'));
