import { Router } from "express";
import { jwtTokenValidator } from "../middlewares/jwtTokenValidator";
const roomRouter = Router();
const roomController = require('./../controllers/room.controller');

//get all Rooms
roomRouter.get('/room', jwtTokenValidator, roomController.getRooms);

//get single Room by id
roomRouter.get('/room/:id', jwtTokenValidator, roomController.getRoomById);

// Add a Room
roomRouter.post('/room', jwtTokenValidator, roomController.createRoom);

//update Room
roomRouter.put('/room/:id', jwtTokenValidator, roomController.updateRoom);

//delete Room
roomRouter.delete('/room/:id', jwtTokenValidator, roomController.deleteRoom);

export { roomRouter };