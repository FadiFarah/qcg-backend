import { user } from "../core/base.entities";

var { UserModel } = require('./../models/user.model');

exports.createUser = async function (newUser: user) {
    try {
        var user = await UserModel.find({email: newUser.email});

        if(user.length === 0) {
            const data: any = new UserModel(newUser);
            await data.save()
                .then((result: any) => {
                    return result;
                })
                .catch((err: any) => {
                    return err;
                });
        }
        else {
            var tempUser: user = {
                _id: user[0]._id,
                displayName: newUser.displayName,
                email: newUser.email,
                emailVerified: newUser.emailVerified,
                firstName: user[0].firstName,
                lastName: user[0].lastName,
                password: user[0].password,
                locale: newUser.locale,
                sub: newUser.sub,
                picture: user[0].picture
            }
            var user = await UserModel.findByIdAndUpdate(user[0]._id, tempUser, {new: true});
            return user;
        }
    } 
    catch (error) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.getUserByEmail = async function (query: any) {
    try {
        var user = await UserModel.find(query);
        return user;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while getting a User by email')
    }
}

exports.getUserById = async function (query:any) {
    try {
        var user = await UserModel.findById(query);
        return user;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while getting User by ID')
    }
}

exports.getAllUsers = async function (query: any) {
    try {
        var users = await UserModel.find(query);
        return users;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users');
    }
}

exports.deleteUser = async function (id: any) {
    await UserModel.findByIdAndDelete(id)
        .then((result: user) => {
            return result;
        })
        .catch((error: any) => {
            return error;
        });
}

exports.updateUser = async function (id: any, newUser: user) {
    try {
        var user = await UserModel.findByIdAndUpdate(id, newUser, {new: true});
        return user;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}