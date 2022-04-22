import { category } from "../core/base.entities";

var { CategoryModel } = require('./../models/category.model')

exports.getCategories = async function (query: any, page: any, limit: any) {
    try {
        var categories = await CategoryModel.find(query)
        return categories;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating categories');
    }
}

exports.getCategoryById = async function (id: any) {
    try {
        var category = await CategoryModel.findById(id);
        return category;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while getting category by id')
    }
}

exports.createCategory = async function (category: category) {
    const data: any = new CategoryModel(category);
    var categoryResult = await data.save()
        .then((result: any) => {
                return result;
            })
            .catch((error: any) => {
                throw Error(error);
            });

    return categoryResult;
}

exports.updateCategory = async function (id: any, newCategory: category) {
    try {
        var category = await CategoryModel.findByIdAndUpdate(id, newCategory, {new: true});
        return category;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while updating category');
    }
}

exports.deleteCategory = async function (id: any) {
    var categoryResult = await CategoryModel.findByIdAndDelete(id)
        .then((result: category) => {
            return result;
        })
        .catch((error: any) => {
            throw Error(error);
        });

    return categoryResult;
}