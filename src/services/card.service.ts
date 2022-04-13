import { card } from "../core/base.entities";

var { CardModel } = require('./../models/card.model');

exports.getCards = async function (query: any) {
    try {
        var cards = await CardModel.find(query);
        return cards;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users');
    }
}

exports.getCardById = async function (id: any) {
    try {
        var card = await CardModel.findById(id);
        return card;
    }
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.createCard = async function (card: card) {
    const data: any = new CardModel(card);
    await data.save()
        .then((result: any) => {
                return result;
            })
            .catch((err: any) => {
                return err;
            });
}

exports.updateCard = async function (id: any, newCard: card) {
    try {
        var card = await CardModel.findByIdAndUpdate(id, newCard, {new: true});
        return card;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.deleteCard = async function (id: any) {
    CardModel.findByIdAndDelete(id)
        .then((result: card) => {
            return result;
        })
        .catch((error: any) => {
            return error;
        });
}