import { room } from "../core/base.entities";
import axios from "axios";
import { Endpoints } from "../core/constants";

var { RoomModel } = require('./../models/room.model');

exports.getRooms = async function (query: any) {
    try {
        var rooms = await RoomModel.find(query);
        return rooms;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users');
    }
}

exports.getRoomById = async function (id: any) {
    try {
        var room = await RoomModel.findById(id);
        return room;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.createRoom = async function (room: room) {
    const data: any = new RoomModel(room);
    
    await data.save()
        .then((result: any) => {
                axios.post(Endpoints.RoomsListUpdated)
                .then(() => {
                    return result;
                });
            })
        .catch((err: any) => {
            return err;
        });
}

exports.updateRoom = async function (id: any, newRoom: room) {
    try {
        var room = await RoomModel.findByIdAndUpdate(id, newRoom, {new: true});
        axios.post(Endpoints.RoomsListUpdated)
        .then(() => {
            return room;
        });
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.deleteRoom = async function (id: any) {
    RoomModel.findByIdAndDelete(id)
        .then((result: room) => {
            axios.post(Endpoints.RoomsListUpdated)
            .then(() => {
                return result;
            });
        })
        .catch((error: any) => {
            return error;
        });
}