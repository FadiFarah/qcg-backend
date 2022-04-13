import { category } from "../core/base.entities";

var { CategoryModel } = require('./../models/category.model')

exports.getCategories = async function (query: any, page: any, limit: any) {
    try {
        var categories = await CategoryModel.find(query)
        return categories;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users');
    }
}

exports.getCategoryById = async function (id: any) {
    try {
        var category = await CategoryModel.findById(id)
        return category;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.createCategory = async function (category: category) {
    const data: any = new CategoryModel(category);
    await data.save()
        .then((result: any) => {
                return result;
            })
            .catch((err: any) => {
                return err;
            });
}

exports.updateCategory = async function (id: any, newCategory: category) {
    try {
        var category = await CategoryModel.findByIdAndUpdate(id, newCategory, {new: true});
        return category;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.deleteCategory = async function (id: any) {
    await CategoryModel.findByIdAndDelete(id)
        .then((result: category) => {
            return result;
        })
        .catch((error: any) => {
            return error;
        });
}