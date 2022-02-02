require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
// register
app.use("/api/users", userRoutes);
// login
app.use("/api/auth", authRoutes);
// forget and reset password
app.use("/api/password-reset", passwordResetRoutes);

const port = process.env.PORT || 3001;
app.listen(port, console.log(`Listening on port ${port}...`));
