const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectionDb");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
console.log("MongoDB Connection String:", process.env.CONNECTION_STRING); // Log the connection string
console.log("Environment Variables Loaded:", process.env); // Log all environment variables for debugging


connectDb();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));

app.listen(PORT, (err) => {
    console.log(`app is listening on port ${PORT}`);
});
