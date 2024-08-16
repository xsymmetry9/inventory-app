const pool = require("./pool");

async function getItems(){
    try{
        const {rows} = await pool.query(
            "SELECT * FROM items"
        );
        return rows;
    } catch (err){
        console.log(err);
    }

}
async function getItem(id){
    try{
        const {rows} = await pool.query(
            "SELECT * FROM items WHERE id = $1", [id]
        );
    
        return rows[0];
    } catch (err)
    {
        console.log(err);
    }
}

async function getQuantity(itemName){
    try{
        const text = `SELECT * FROM items WHERE title = $1`;
        const {rows} = await pool.query(text, [itemName]);
        console.log("Item was found");
        return rows[0].quantity;
    } catch (err){
        console.log("This is an empty array");
    }
}

async function createItem(item){
    const {itemName, price, quantity} = item;
    // adds item to the list if it's there
    try{
        const prevQuantity = await getQuantity(itemName);
        const sumOfQuantity = (parseInt(prevQuantity, 10) + parseInt(quantity, 10));
        const text = `UPDATE items SET quantity = $1 WHERE title = $2`;
        await pool.query(text, [sumOfQuantity, itemName]);

    } catch (err){
    //Adds to the table
        try{
            const text = `INSERT INTO items (title, price, quantity) VALUES ($1, $2, $3)`;
            await pool.query(text, [itemName, price, quantity]);
        } catch (err){
            console.log(err);
        }
    } 

}
const updateItem = async(item) =>{
    try{
        const text = `UPDATE items SET title = $1, price = $2, quantity = $3 WHERE id = $4`;
        await pool.query(text, [item.itemName, item.price, item.quantity, item.id]);
        console.log("Item updated");
    } catch (err){
        console.log(err);
    }
}
const deleteItem = async(id) =>{

    try{
        const text = `DELETE FROM items WHERE id = $1`;
        console.log("item deleted");
        await pool.query(text, [id]);

    } catch (err){
        console.log("item not found");
    }
}
module.exports = {
    getItems,
    getItem,
    createItem,
    deleteItem,
    updateItem
}