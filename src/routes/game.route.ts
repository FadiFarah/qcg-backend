import { Router } from "express";
import { jwtTokenValidator } from "../middlewares/jwtTokenValidator";
const gameRouter = Router();
const GameController = require('./../controllers/game.controller');

//get all games
gameRouter.get('/game', jwtTokenValidator, GameController.getGames);

//get single game by id
gameRouter.get('/game/:id', jwtTokenValidator, GameController.getGameById);

//get room id
gameRouter.get('/game/room/:id', jwtTokenValidator,GameController.getGameByRoomId);

// Add a game
gameRouter.post('/game', jwtTokenValidator, GameController.createGame);

//update game
gameRouter.put('/game/:id', jwtTokenValidator, GameController.updateGame);

//delete game
gameRouter.delete('/game/:id', jwtTokenValidator, GameController.deleteGame);


//get remainig cards
gameRouter.get('/game/remainings/:id', jwtTokenValidator, GameController.getRemainingCardsById);
export { gameRouter };