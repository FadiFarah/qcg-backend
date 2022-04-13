var GameService = require('./../services/game.service')    

exports.getGames = async function (req: any, res: any, next: any) {
    try {
        var games = await GameService.getGames({})
        return res.status(200).json({ status: 200, data: games, message: "Succesfully games Retrieved" });
    }
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getGameById = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var game = await GameService.getGameById(id);
        return res.status(200).json({ status: 200, data: game, message: "Succesfully game Retrieved" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createGame = async function (req: any, res: any, next: any) {
    try {
        var game = await GameService.createGame(req.body);
        return res.status(200).json({ status: 200, data: game, message: "Succesfully created game" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateGame = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var game = await GameService.updateGame(id, req.body);
        return res.status(200).json({ status: 200, data: game, message: "Succesfully updated game" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteGame = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var game = await GameService.deleteGame(id);
        return res.status(200).json({ status: 200, data: game, message: "Succesfully deleted game" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getRemainingCardsById = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var game = await GameService.getRemainingCardsById(id);
        return res.status(200).json({ status: 200, data: game.remainingCards, message: "" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}