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
        throw Error('Error while paginating rooms');
    }
}

exports.getRoomById = async function (id: any) {
    try {
        var room = await RoomModel.findById(id);
        return room;
    } 
    catch (error) {
        // Log Errors
        throw Error('Error while getting a room by id')
    }
}

exports.createRoom = async function (room: room) {
    const data: any = new RoomModel(room);
    
    var roomResult = await data.save()
        .then((result: any) => {            
                return axios.post(Endpoints.RoomsListUpdated)
                .then(() => {
                    return result;
                });
            })
        .catch((err: any) => {
            throw Error(err);
        });
        
    return roomResult;
}

exports.updateRoom = async function (id: any, newRoom: room) {
    try {
        var room = await RoomModel.findByIdAndUpdate(id, newRoom, {new: true});  
        const bodyDetails = {
            roomId: id
        };
        await axios.post(Endpoints.RoomsListUpdated);
        await axios.post(Endpoints.GameDataUpdated, bodyDetails);      
        return room;
    } 
    catch (error) {
        // Log Errors
        throw Error('Error while updating a room')
    }
}

exports.deleteRoom = async function (id: any) {
    var roomResult = RoomModel.findByIdAndDelete(id)
        .then((result: room) => {
            return axios.post(Endpoints.RoomsListUpdated)
            .then(() => {
                return result;
            });
        })
        .catch((error: any) => {
            throw Error(error);
        });

    return roomResult;
}