import { Schema, model } from "mongoose";

const { CardSchema } = require("./card.model");

const PlayerSchema = new Schema({
    gameId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },
    isWin: {
        type: Boolean,
        required: true
    },
    cards: {
        type: [CardSchema],
        required: true
    }
});

const PlayerModel = model("player", PlayerSchema);

module.exports = {
    PlayerModel,
    PlayerSchema
}