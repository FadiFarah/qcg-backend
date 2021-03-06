import { game } from "../core/base.entities";

var { GameModel } = require('./../models/game.model');

exports.getGames = async function (query: any) {
    try {
        var games = await GameModel.find(query);
        return games;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating games');
    }
}

exports.getGameById = async function (id: any) {
    try {
        var game = await GameModel.findById(id);
        return game;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while getting a game by id');
    }
}

exports.createGame = async function (game: game) {
    const data: any = new GameModel(game);
    var gameResult = await data.save()
        .then((result: any) => {
                return result;
            })
            .catch((error: any) => {
                throw Error(error);
            });
            
    return gameResult;
}

exports.updateGame = async function (id: any, newGame: game) {
    try {
        var game = await GameModel.findByIdAndUpdate(id, newGame, {new: true});
        return game;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while updating a game')
    }
}

exports.deleteGame = async function (id: any) {
    GameModel.findByIdAndDelete(id)
        .then((result: game) => {
            return result;
        })
        .catch((error: any) => {
            return error;
        });
}

exports.getRemainingCardsById= async function (id: any) {
    try {
        var game = await GameModel.findById(id);
        return game;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while getting remaining card of a game');
    }}

    exports.getGameByRoomId= async function (query:any) {
        try {
            var game = await GameModel.find(query);
            return game;
        } 
        catch (e) {
            // Log Errors
            throw Error('Error while getting game by room Id');
        }
        
    }