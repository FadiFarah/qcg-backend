import { player } from "../core/base.entities";

var { PlayerModel } = require('./../models/player.model');

exports.getPlayers = async function (query: any) {
    try {
        var players = await PlayerModel.find(query);
        return players;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users');
    }
}

exports.getPlayerCardsByGameId =  async function (query: any) {
    try {
        var player = await PlayerModel.find(query);
        return player;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Cards Users');
    }
}


exports.getPlayerById = async function (id: any) {
    try {
        var player = await PlayerModel.findById(id);
        return player;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.createPlayer = async function (player: player) {
    const data: any = new PlayerModel(player);
    await data.save()
        .then((result: any) => {
                return result;
            })
            .catch((err: any) => {
                return err;
            });
}

exports.updatePlayer = async function (id: any, newPlayer: player) {
    try {
        var player = await PlayerModel.findByIdAndUpdate(id, newPlayer, {new: true});
        return player;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.deletePlayer = async function (id: any) {
    PlayerModel.findByIdAndDelete(id)
        .then((result: player) => {
            return result;
        })
        .catch((error: any) => {
            return error;
        });
}