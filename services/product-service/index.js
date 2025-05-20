const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/items', require('./routers/items'));
app.use('/lists', require('./routers/lists'));
app.use('/categories', require('./routers/categories'));
app.use('/reviews', require('./routers/reviews'));
app.use('/reviewsUser', require('./routers/reviewsUser'));
