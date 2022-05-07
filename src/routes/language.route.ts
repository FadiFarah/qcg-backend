import { Router } from "express";
import { jwtTokenValidator } from "../middlewares/jwtTokenValidator";

const languageRouter = Router();
const LanguageController = require('./../controllers/language.controller');

//get all languages
languageRouter.get('/language', jwtTokenValidator, LanguageController.getLanguages);

//get single language by isoCode
languageRouter.get('/language/:isoCode', jwtTokenValidator, LanguageController.getLanguageByIsoCode);


export { languageRouter };