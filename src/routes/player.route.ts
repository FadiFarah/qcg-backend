import { Router } from "express";

const playerRouter = Router();
const PlayerController = require('./../controllers/player.controller');

//get all players
playerRouter.get('/player', PlayerController.getPlayers);

// get player cards by game id
playerRouter.get('/player/cards/:id/:gameId', PlayerController.getPlayerCardsByGameId)

//get single player by id
playerRouter.get('/player/:id', PlayerController.getPlayerById);

// Add a player
playerRouter.post('/player', PlayerController.createPlayer);

//update player
playerRouter.put('/player/:id', PlayerController.updatePlayer);

//delete player
playerRouter.delete('/player/:id', PlayerController.deletePlayer);

export { playerRouter };