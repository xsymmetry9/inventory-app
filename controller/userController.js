const db = require("../db/queries");

const getItems = async (req, res) =>{
    const items = await db.getItems();

    res.render("index", {title: "Items", items: items});
}

const addItemPage = async(req, res) =>{
    res.render("./pages/add", {title: "Add Item"})
}

const createItem = async(req, res) =>{
    const item = req.body;

    await db.createItem(item);

    res.redirect("/");
}

const removeItem = async(req, res) =>{
    const {deleteItem} = req.body;
    
    await db.deleteItem(deleteItem);

    res.redirect("/");
}

const toEditPage = async(req, res) =>{

    const item = await db.getItem(req.params.id);

    res.render("./pages/edit", {title: "Edit Item", item: item});
}

const editItem = async(req, res) =>{

    const item = req.body;
    await db.updateItem(item);

    res.redirect("/");
}
module.exports = {getItems, addItemPage, createItem, removeItem, toEditPage, editItem}