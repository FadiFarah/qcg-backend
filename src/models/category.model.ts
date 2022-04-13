import { Limitations } from "../core/constants";
import { Schema, model } from "mongoose";

const { CardSchema } = require("./card.model");

const CategorySchema  = new Schema({
    categoryName: {
        type: String,
        required: true 
    },
    deck: {
        type: [CardSchema],
        required: false
    }
});

const CategoryModel = model("category", CategorySchema);

module.exports =  {
    CategoryModel,
    CategorySchema
};