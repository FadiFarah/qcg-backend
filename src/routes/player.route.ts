import { Router } from "express";
import { jwtTokenValidator } from "../middlewares/jwtTokenValidator";

const playerRouter = Router();
const PlayerController = require('./../controllers/player.controller');

//get all players
playerRouter.get('/player', jwtTokenValidator, PlayerController.getPlayers);

// get player cards by game id
playerRouter.get('/player/cards/:id/:gameId', jwtTokenValidator, PlayerController.getPlayerCardsByGameId)

//get single player by id
playerRouter.get('/player/:id', jwtTokenValidator, PlayerController.getPlayerById);

// Add a player
playerRouter.post('/player', jwtTokenValidator, PlayerController.createPlayer);

//update player
playerRouter.put('/player/:id', jwtTokenValidator, PlayerController.updatePlayer);

//delete player
playerRouter.delete('/player/:id', jwtTokenValidator, PlayerController.deletePlayer);

export { playerRouter };