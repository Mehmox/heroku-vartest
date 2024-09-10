const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000
let uri = "mongodb://localhost:27017/test_db_connection";
let e = "no error";
mongoose.connect(uri)
    .then((r) => {
        console.log("MONGO CONNECTED!!")
    })
    .catch((err) => {
        console.log("MONGO ERROR");
        console.log(err);
        e = err
    });

// const Schema = new mongoose.Schema({
//     comment: String,
// })
// const data = mongoose.model("Comment", Schema)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`lisenning on port: ${port}`))

app.get("/", async (req, res) => {
    // let newData = new data({ comment: "this is my first fake data to test my db" })
    // await newData.save()
    // const allData = await data.find({})
    // res.render("index", { allData })
    // console.log(allData)
    console.log("hit")
    res.render("test", { e })
})
