const db = require("../db/queries");

const getItems = async (req, res) =>{
    const items = await db.getItems();

    res.render("index", {title: "Testing", items: items});
}

const addItemPage = async(req, res) =>{
    res.render("./pages/add", {title: "items"})
}

const addItem = async(req, res) =>{
    const {itemName, price, quantity, inventoryList} = req.body;
    console.log("New item:", itemName);
    console.log("Price:", price);
    console.log("Quantity:", quantity);
    console.log("Name of Inventory List:", inventoryList);

    await db.addItem(inventoryList, itemName);

    res.redirect("/");
}
module.exports = {getItems, addItemPage, addItem}