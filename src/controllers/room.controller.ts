var RoomService = require('./../services/room.service');    

exports.getRooms = async function (req: any, res: any, next: any) {
    try {
        var rooms = await RoomService.getRooms({})
        return res.status(200).json({ status: 200, data: rooms, message: "Succesfully Rooms Retrieved" });
    }
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getRoomById = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var room = await RoomService.getRoomById(id);
        return res.status(200).json({ status: 200, data: room, message: "Succesfully Room Retrieved" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createRoom = async function (req: any, res: any, next: any) {
    try {
        var room = await RoomService.createRoom(req.body);                
        return res.status(200).json({ status: 200, data: room, message: "Succesfully created Room" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateRoom = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var room = await RoomService.updateRoom(id, req.body);        
        return res.status(200).json({ status: 200, data: room, message: "Succesfully updated Room" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteRoom = async function (req: any, res: any, next: any) {
    var id = req.params.id;
    try {
        var room = await RoomService.deleteRoom(id, req.body);
        return res.status(200).json({ status: 200, data: room, message: "Succesfully deleted Room" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}