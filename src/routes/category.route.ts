import { Router } from "express";
import { jwtTokenValidator } from "../middlewares/jwtTokenValidator";

const categoryRouter = Router();
const CategoryController = require('./../controllers/category.controller');

//get all categories
categoryRouter.get('/category', jwtTokenValidator, CategoryController.getCategories);

//get single category by id
categoryRouter.get('/category/:id', jwtTokenValidator, CategoryController.getCategoryById);

// Add a category
categoryRouter.post('/category', jwtTokenValidator, CategoryController.createCategory);

//update category
categoryRouter.put('/category/:id', jwtTokenValidator, CategoryController.updateCategory);

//delete category
categoryRouter.delete('/category/:id', jwtTokenValidator, CategoryController.deleteCategory);

export { categoryRouter };