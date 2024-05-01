"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.charactersRouter = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.charactersRouter = express_1.default.Router();
// Data
const characters = require("../data/characters.json");
//Type
const Characters_1 = require("../models/Characters");
// 1 - Route pour récupérer la liste des personnages de Genshin
exports.charactersRouter.get("/characters", (req, res) => {
  try {
    const charactersListParse =
      Characters_1.charactersListSchema.parse(characters);
    return res.status(200).json(charactersListParse);
  } catch (error) {
    if (error instanceof zod_1.ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});
// 2 - Route pour récupérer les détails d'un personnage
exports.charactersRouter.get("/characters/details", (req, res) => {
  try {
    const { id } = req.query;
    for (let i = 0; i < characters.length; i++) {
      //   console.log(i);
      if (id === characters[i].id) {
        const charactersDetailsParse =
          Characters_1.characterDetailsSchema.parse(characters[i]);
        return res.status(200).json(charactersDetailsParse);
      }
    }
    return res.status(404).json("no match found for this id");
  } catch (error) {
    if (error instanceof zod_1.ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});
