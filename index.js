//require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
let e = "no error";
let uri = process.env.MONGO_URI
mongoose.connect(uri)
    .then((r) => {
        console.log("MONGO CONNECTED!!")
    })
    .catch((err) => {
        console.log("MONGO ERROR");
        console.log(err);
        e = err
    });

const Schema = new mongoose.Schema({
    comment: String,
})
const data = mongoose.model("Comment", Schema)


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Lisenning on port: ${port}`))

app.get("/", async (req, res) => {
    // let newData = new data({ comment: "this is my first fake data to test my db" })
    // await newData.save()
    const allData = await data.find({})
    res.render("index", { allData })
    // console.log(allData)
    // res.render("test", { e })
})
