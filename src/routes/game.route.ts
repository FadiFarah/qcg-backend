import { Router } from "express";

const gameRouter = Router();
const GameController = require('./../controllers/game.controller');

//get all games
gameRouter.get('/game', GameController.getGames);

//get single game by id
gameRouter.get('/game/:id', GameController.getGameById);

// Add a game
gameRouter.post('/game', GameController.createGame);

//update game
gameRouter.put('/game/:id', GameController.updateGame);

//delete game
gameRouter.delete('/game/:id', GameController.deleteGame);


//get remainig cards
gameRouter.get('/game/remainings/:id', GameController.getRemainingCardsById);
export { gameRouter };