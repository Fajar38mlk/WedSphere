const express = require("express");

const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = 5000;


// DATABASE CONNECT
mongoose.connect("mongodb://127.0.0.1:27017/hallDB")

.then(() => {

    console.log("MongoDB Connected Successfully");

})

.catch((err) => {

    console.log(err);
});


// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/api/users", userRoutes);

// HOME ROUTE
app.get("/", (req, res) => {

    res.send("Backend Running Successfully 🚀");
});


// SERVER RUN
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});