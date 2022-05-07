import { language } from "../core/base.entities";

var { LanguageModel } = require('./../models/language.model');

exports.getLanguages = async function (query: any) {
    try {
        var languages = await LanguageModel.find(query);
        return languages;
    } 
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Languages');
    }
}

exports.getLanguageByIsoCode = async function (query: any) {
    try {
        var language = await LanguageModel.findOne(query);
        return language;
    }
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Language by isoCode')
    }
}