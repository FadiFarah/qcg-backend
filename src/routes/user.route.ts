import { Router } from "express";
import { jwtTokenValidator } from "../middlewares/jwtTokenValidator";
const userRouter = Router();
const UserController = require('./../controllers/user.controller');

// Add a user
userRouter.post('/user', UserController.createUser);

//update user
userRouter.put('/user/:id', jwtTokenValidator, UserController.updateUser);

//delete user
userRouter.delete('/user/:id', jwtTokenValidator, UserController.deleteUser);

//get user by email
userRouter.get('/user/email/:email', jwtTokenValidator, UserController.getUserByEmail);

//getUserByID user
userRouter.get('/user/:id', jwtTokenValidator, UserController.getUserById);

//getAllUsers
userRouter.get('/user', jwtTokenValidator, UserController.getAllUsers);

//getUserLeaderboard
userRouter.get('/user/top/leaderboard', jwtTokenValidator,UserController.getUsersLeaderboard)

export { userRouter };