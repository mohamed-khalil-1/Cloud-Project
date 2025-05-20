const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/register', require('./routers/register'));
app.use('/login', require('./routers/login'));
