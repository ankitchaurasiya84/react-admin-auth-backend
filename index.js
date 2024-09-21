const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Adjust according to your frontend origin
}));
app.use(express.json());

app.use('/auth', authRoutes);

const CONNECTION_URL = 'mongodb://localhost:27017';
const PORT = process.env.PORT || 5008;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message));
