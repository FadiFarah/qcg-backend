import { Router } from "express";
import { jwtTokenValidator } from "../middlewares/jwtTokenValidator";

const cardRouter = Router();
const CardController = require('./../controllers/card.controller');

//get all cards
cardRouter.get('/card', jwtTokenValidator, CardController.getCards);

//get single card by id
cardRouter.get('/card/:id', jwtTokenValidator, CardController.getCardById);

//Add a card
cardRouter.post('/card', jwtTokenValidator, CardController.createCard);

//update card
cardRouter.put('/card/:id', jwtTokenValidator, CardController.updateCard);

//delete card
cardRouter.delete('/card/:id', jwtTokenValidator, CardController.deleteCard);

export { cardRouter };