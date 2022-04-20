import { Schema, model } from "mongoose";

const { CardSchema } = require("./card.model");

const PlayerSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    isWin: {
        type: Boolean,
        required: true
    },
    cards: {
        type: [CardSchema],
        required: true
    },
    isReady : {
        type: Boolean,
        required: true
    },
    isMaster : {
        type: Boolean,
        required: true
    },
    isTurn: {
        type: Boolean,
        required: true
    },
    points: {
        type: Boolean,
        required: true
    }


    
    
    
});

const PlayerModel = model("player", PlayerSchema);

module.exports = {
    PlayerModel,
    PlayerSchema
}