var CardService = require('./../services/card.service');

exports.getCards = async function (req: any, res: any, next: any) {
    try {
        var cards = await CardService.getCards({})
        return res.status(200).json({ status: 200, data: cards, message: "Succesfully Cards Retrieved" });
    }
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getCardById = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var cards = await CardService.getCardById(id);
        return res.status(200).json({ status: 200, data: cards, message: "Succesfully Card Retrieved" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createCard = async function (req: any, res: any, next: any) {
    try {
        var card = await CardService.createCard(req.body);
        return res.status(200).json({ status: 200, data: card, message: "Succesfully created Card" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateCard = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var card = await CardService.updateCard(id, req.body);
        return res.status(200).json({ status: 200, data: card, message: "Succesfully updated Card" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteCard = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var card = await CardService.deleteCard(id, req.body);
        return res.status(200).json({ status: 200, data: card, message: "Succesfully deleted Card" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}