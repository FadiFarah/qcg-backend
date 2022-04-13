import { Router } from "express";

const categoryRouter = Router();
const CategoryController = require('./../controllers/category.controller');

//get all categories
categoryRouter.get('/category', CategoryController.getCategories);

//get single category by id
categoryRouter.get('/category/:id', CategoryController.getCategoryById);

// Add a category
categoryRouter.post('/category', CategoryController.createCategory);

//update category
categoryRouter.put('/category/:id', CategoryController.updateCategory);

//delete category
categoryRouter.delete('/category/:id', CategoryController.deleteCategory);

export { categoryRouter };