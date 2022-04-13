var CategoryService = require('./../services/category.service')    

exports.getCategories = async function (req: any, res: any, next: any) {
    try {
        var categories = await CategoryService.getCategories({})
        return res.status(200).json({ status: 200, data: categories, message: "Succesfully Categories Retrieved" });
    }
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getCategoryById = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var categories = await CategoryService.getCategoryById(id);
        return res.status(200).json({ status: 200, data: categories, message: "Succesfully Category Retrieved" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createCategory = async function (req: any, res: any, next: any) {
    try {
        var category = await CategoryService.createCategory(req.body);
        return res.status(200).json({ status: 200, data: category, message: "Succesfully created category" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateCategory = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var category = await CategoryService.updateCategory(id, req.body);
        return res.status(200).json({ status: 200, data: category, message: "Succesfully updated category" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteCategory = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var category = await CategoryService.deleteCategory(id, req.body);
        return res.status(200).json({ status: 200, data: category, message: "Succesfully deleted category" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}