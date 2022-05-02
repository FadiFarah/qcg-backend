import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    emailVerified: {
        type: Boolean,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    locale: {
        type: String,
        required: false
    },
    displayName: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    sub: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    score : {
        type: Number,
        required: false
    }
});

const UserModel = model("user", UserSchema);

module.exports = {
    UserModel,
    UserSchema
}
