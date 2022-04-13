import { Router } from "express";

const cardRouter = Router();
const CardController = require('./../controllers/card.controller');

//get all cards
cardRouter.get('/card', CardController.getCards);

//get single card by id
cardRouter.get('/card/:id', CardController.getCardById);

//Add a card
cardRouter.post('/card', CardController.createCard);

//update card
cardRouter.put('/card/:id', CardController.updateCard);

//delete card
cardRouter.delete('/card/:id', CardController.deleteCard);

export { cardRouter };