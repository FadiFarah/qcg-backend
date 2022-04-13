import { Router } from "express";

const roomRouter = Router();
const roomController = require('./../controllers/room.controller');

//get all Rooms
roomRouter.get('/room', roomController.getRooms);

//get single Room by id
roomRouter.get('/room/:id', roomController.getRoomById);

// Add a Room
roomRouter.post('/room', roomController.createRoom);

//update Room
roomRouter.put('/room/:id', roomController.updateRoom);

//delete Room
roomRouter.delete('/room/:id', roomController.deleteRoom);

export { roomRouter };