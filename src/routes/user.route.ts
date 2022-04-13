import { Router } from "express";

const userRouter = Router();
const UserController = require('./../controllers/user.controller');

// Add a user
userRouter.post('/user', UserController.createUser);

//update user
userRouter.put('/user/:id', UserController.updateUser);

//delete user
userRouter.delete('/user/:id', UserController.deleteUser);

//get user by email
userRouter.get('/user/email/:email', UserController.getUserByEmail);

//getUserByID user
userRouter.get('/user/:id', UserController.getUserById);

//getAllUsers
userRouter.get('/user', UserController.getAllUsers);

export { userRouter };