require("dotenv").config();
const mongoose = require("mongoose");

const uri = `mongodb+srv://quartetcardgame:${process.env.MONGODB_PASSWORD}@cluster0.fmzam.mongodb.net/quartetcardgamedb?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection to Mongo DB succeeded!");
    })
    .catch((error) => {
        console.log("Connection to Mongo DB failed!");
        console.log(error);
    })