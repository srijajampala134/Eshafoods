const mongoose = require("mongoose");

const connectDb = async () => {
    console.log("MongoDB Connection String:", process.env.CONNECTION_STRING); // Log the connection string
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log("connected..."))
    .catch(err => console.error("MongoDB connection error:", err)); // Log any connection errors
}

module.exports = connectDb;
