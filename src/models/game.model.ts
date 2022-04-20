import { Schema, model } from "mongoose";
const {CardSchema} = require ("./card.model")

const { PlayerSchema } = require("./player.model");
const { CategorySchema } = require("./category.model");

const GameSchema = new Schema({
    players: {
        type: [PlayerSchema],
        required: false
    },
    roomId:{
        type: String,
        required: false
    },

    remainingCards: {
        type :[CardSchema],
        require: false
    }
});

const GameModel = model("game", GameSchema);

module.exports = {
    GameModel,
    GameSchema
}