import { Schema, model } from "mongoose";

const { UserSchema } = require("./user.model");
const { CategorySchema } = require("./category.model");

const RoomSchema = new Schema({
    roomMaster: {
        type: UserSchema,
        required: true
    },
    roomName: {
        type: String,
        required: true,
    },
    roomPassword: {
        type: String,
        required: true,
    },
    category: {
        type: CategorySchema,
        required: false
    },
    currentUsers: {
        type: [UserSchema],
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