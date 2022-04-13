import { Schema, model } from "mongoose";

const CardSchema = new Schema({
    imageURL: { 
        type: String,
        required: true
     },
    cardName: { 
        type: String,
        required: true
    },
    categoryGroup: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    }
});

const CardModel = model("card", CardSchema);

module.exports =  {
    CardModel,
    CardSchema
};
