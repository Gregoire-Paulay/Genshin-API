"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stoneRouter = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.stoneRouter = express_1.default.Router();
// Data
const stone = require("../data/stone.json");
// Type
const Stone_1 = require("../models/Stone");
// 1 - Route qui donne la liste des pierres d'amélioration de personnages
exports.stoneRouter.get("/stone", (req, res) => {
    try {
        const stoneListParse = Stone_1.stoneListSchema.parse(stone);
        return res.status(200).json(stoneListParse);
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json(error);
        }
        else {
            return res.status(500).json(error);
        }
    }
});
// 2 - Route pour avoir les détails des pierres d'amélioration de personnage
exports.stoneRouter.get("/stone/details", (req, res) => {
    try {
        const { id } = req.query;
        for (let i = 0; i < stone.length; i++) {
            if (id === stone[i].id) {
                // console.log(i);
                const stoneDetailsParse = Stone_1.stoneDetailsSchema.parse(stone[i]);
                return res.status(200).json(stoneDetailsParse);
            }
        }
        return res.status(404).json("this id doesn't match");
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json(error);
        }
        else {
            return res.status(500).json(error);
        }
    }
});
