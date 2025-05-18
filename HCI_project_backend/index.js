const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConfig");

// Load environment variables
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3500;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/register", require("./routers/regestier"));
app.use("/login", require("./routers/login"));
app.use("/items", require("./routers/items"));
app.use("/categories", require("./routers/categories"));
app.use("/reviews", require("./routers/reviews"));
app.use("/reviewsUser", require("./routers/reviewsUser"));
app.use("/lists", require("./routers/lists"));
app.use("/chat", require("./routers/chat"));
app.use("/notification", require("./routers/notification"));
app.use("/wishlist", require("./routers/wishlist"));
app.use("/insights", require("./routers/insights"));
app.use("/trackSoldItems", require("./routers/wishlisted"));

// Start server only after MongoDB connection is established
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});



