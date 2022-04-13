import { Schema, model } from "mongoose";

const { PlayerSchema } = require("./player.model");
const { CategorySchema } = require("./category.model");

const GameSchema = new Schema({
    players: {
        type: [PlayerSchema],
        required: true
    },
    category: {
        type: CategorySchema,
        required: true
    },

    remainingCards: {
        type: [{
            _id: { type: String },
            imageURL: { type: String },
            cardName: { type: String },
            categoryGroup: { type: String },
            description: { type: String }
        }] 
    }
});

const GameModel = model("game", GameSchema);

module.exports = {
    GameModel,
    GameSchema
}