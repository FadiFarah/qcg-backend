import { Schema, model } from "mongoose";

const { PlayerSchema } = require("./player.model");
const { CardSchema } = require("./card.model");

const RoomSchema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    roomPassword: {
        type: String,
        required: false,
    },
    categoryName: {
        type: String,
        required: false
    },
    remainingCards: {
        type: [CardSchema],
        required: false
    },
    players: {
        type: [PlayerSchema],
        required: false
    },
    isWaiting: {
        type: Boolean,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true
    }
});

const RoomModel = model("room", RoomSchema);

module.exports = {
    RoomModel,
    RoomSchema
}