require('dotenv').config()
const express = require('express');
const path = require('path');

const userRouter = require('./router/userRouter');
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({extended: true}));
app.use("/", userRouter);

const PORT = process.env.POR || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});