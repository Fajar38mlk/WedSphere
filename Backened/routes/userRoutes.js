const express = require("express");

const router = express.Router();

const User = require("../models/User");


// SIGNUP API
router.post("/signup", async (req, res) => {

    try {

        const { name, email, password, role } = req.body;

        const newUser = new User({

            name,
            email,
            password,
            role
        });

        await newUser.save();

        res.status(201).json({

            message: "User Registered Successfully"
        });

    } catch (error) {

        res.status(500).json({

            message: error.message
        });
    }
});

module.exports = router;