const mongoose = require("mongoose");
let uri = "mongodb://localhost:27017/farmStand";
mongoose.connect(uri)
    .then((r) => {
        console.log("MONGO CONNECTED!!")
    })
    .catch((err) => {
        console.log("MONGO ERROR");
        console.log(err);
    });