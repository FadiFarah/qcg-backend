import { Schema, model } from "mongoose";

const TranslationSchema = new Schema({
    isoCode: { 
        type: String,
        required: false
    },
    title: { 
        type: String,
        required: false
    }
});

const LanguageSchema = new Schema({
    isoCode: { 
        type: String,
        required: true
    },
    translations: {
        type: [TranslationSchema]
    }
});

const LanguageModel = model("language", LanguageSchema);

module.exports =  {
    LanguageModel,
    LanguageSchema
};
