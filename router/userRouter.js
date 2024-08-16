const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

// Renders all items
router.get("/", userController.getItems);

// Renders Add Page
router.get("/add", userController.addItemPage);

// Adds item to table
router.post("/add", userController.createItem);

// Deletes the item
router.post("/delete", userController.removeItem);

// Edits the item
router.get('/:id/edit', userController.toEditPage);

router.post("/:id/edit", userController.editItem);


module.exports = router;