const db = require("../db/queries");

const getItems = async (req, res) =>{
    const items = await db.getItems();

    res.render("index", {title: "Testing", items: items});
}

module.exports = {getItems}