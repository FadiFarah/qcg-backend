var LanguageService = require('./../services/language.service');    

exports.getLanguages = async function (req: any, res: any, next: any) {
    try {
        var rooms = await LanguageService.getLanguages({})
        return res.status(200).json({ status: 200, data: rooms, message: "Succesfully Languages Retrieved" });
    }
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getLanguageByIsoCode = async function (req: any, res: any, next: any) {
    var isoCode = req.params.isoCode;
    
    try {
        var room = await LanguageService.getLanguageByIsoCode({isoCode: isoCode});
        return res.status(200).json({ status: 200, data: room, message: "Succesfully Language by isoCode Retrieved" });
    } 
    catch (e: any) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}