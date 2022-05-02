import { userInfo } from "os";
import { user } from "../core/base.entities";

var UserService = require('./../services/user.service');  

exports.createUser = async function (req: any, res: any, next: any) {
    try {
        var user = await UserService.createUser(req.body);       
        return res.status(200).json({ status: 200, data: user, message: "Succesfully created user" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateUser = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var user = await UserService.updateUser(id, req.body);
        return res.status(200).json({ status: 200, data: user, message: "Succesfully updated user" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteUser = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var user = await UserService.deleteUser(id, req.body);
        return res.status(200).json({ status: 200, data: user, message: "Succesfully deleted user" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getUserByEmail = async function (req: any, res: any, next: any) {
    try {
        var user = await UserService.getUserByEmail({email:req.params.email})
        return res.status(200).json({ status: 200, data: user, message: "Succesfully get user by email " });
    }
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getAllUsers = async function (req: any, res: any, next: any) {
    try {
        var rooms = await UserService.getAllUsers({})
        return res.status(200).json({ status: 200, data: rooms, message: "Succesfully users Retrieved" });
    }
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getUserById = async function (req: any, res: any, next: any) {
    try {
        var user = await UserService.getUserById({_id: req.params.id});
        return res.status(200).json({ status: 200, data: user, message: "Succesfully get user by ID" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.getUsersLeaderboard = async function (req: any, res: any, next: any) {
    try {
        var users: user[] = await UserService.getAllUsers({})
        users.sort((a: user, b: user) => b.score - a.score);
        var topTenUsers = users.splice(0, 10);
        
        return res.status(200).json({ status: 200, data: topTenUsers, message: "Succesfully users Retrieved" });
    
    }
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}