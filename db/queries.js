const pool = require("./pool");

async function getItems(){
    const {rows} = await pool.query(
        "SELECT * FROM items"
    );
    return rows;
}

async function search(inventoryName, itemName){
    try{
        const text = `SELECT * FROM ${inventoryName} WHERE title = $1`;
        const {rows} = await pool.query(text, [itemName]);
        console.log(rows);
        return rows;
    } catch (err){
        console.log(err);
    }
}

async function addItem(inventoryName, itemName){
    //checks if item is on the list
    const rows = await search(inventoryName, itemName);

    if(rows.length != 0)
    {
        console.log("item is found");
        console.log("Quantity:", rows[0].quantity);
    } else {
        console.log("Item is not found.  Would you like to add it?")
    }

    // try{
    //     const text = `INSERT INTO ${inventoryName} (title) VALUES ($1)`;
    //     await pool.query(text, [itemName]);
    // } catch (err){
    //     console.log(err);
    // }

}

module.exports ={
    getItems,
    addItem
}