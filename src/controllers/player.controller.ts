var PlayerService = require('./../services/player.service')    

exports.getPlayers = async function (req: any, res: any, next: any) {
    try {
        var players = await PlayerService.getPlayers({})
        return res.status(200).json({ status: 200, data: players, message: "Succesfully players Retrieved" });
    }
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


exports.getPlayerCardsByGameId = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    var gameId = req.params.gameId
    try {
        var player = await PlayerService.getPlayerById(id);
        if(player.gameId === gameId) {
            return res.status(200).json({ status: 200, data: player.cards, message: "Succesfully player cards Retrieved" });
        }
        return res.status(400).json({ status: 400});
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getPlayerById = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var player = await PlayerService.getPlayerById(id);
        return res.status(200).json({ status: 200, data: player, message: "Succesfully player Retrieved" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createPlayer = async function (req: any, res: any, next: any) {
    try {
        var player = await PlayerService.createPlayer(req.body);
        return res.status(200).json({ status: 200, data: player, message: "Succesfully created player" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updatePlayer = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var player = await PlayerService.updatePlayer(id, req.body);
        return res.status(200).json({ status: 200, data: player, message: "Succesfully updated player" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deletePlayer = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var player = await PlayerService.deletePlayer(id);
        return res.status(200).json({ status: 200, data: player, message: "Succesfully deleted player" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getRemainingCardsById = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var player = await PlayerService.getRemainingCardsById(id, );
        return res.status(200).json({ status: 200, data: player, message: " " });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}