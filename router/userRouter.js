const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

// Renders all items
router.get("/", userController.getItems);

// Renders Add Page
router.get("/add", userController.addItemPage);

// Adds item to table
router.post("/add", userController.addItem);

module.exports= router;