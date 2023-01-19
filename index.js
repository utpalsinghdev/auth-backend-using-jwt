const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },

    () => console.log("Connected to DB!")
);



// Middleware
app.use(express.json());





// Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");








// Route Middleware's
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);






app.listen(3080, () => {
  console.log("Server is running on port 3080");
});
