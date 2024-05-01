"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weeklyBossRouter = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.weeklyBossRouter = express_1.default.Router();
// Data
const weeklyBoss = require("../data/weeklyBoss.json");
//Type
const WeeklyBoss_1 = require("../models/WeeklyBoss");
// 1 - Route pour récupérer la liste des Boss Weekly avec leur loot unique
exports.weeklyBossRouter.get("/boss/weekly", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const weeklyBossListParse = WeeklyBoss_1.weeklyBossListSchema.parse(weeklyBoss);
        return res.status(200).json(weeklyBossListParse);
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            return res.status(400).json(error);
        }
        else {
            return res.status(500).json(error);
        }
    }
}));
// 2 - Route pour avoir le détail d'un Boss
exports.weeklyBossRouter.get("/boss/weekly/details", (req, res) => {
    try {
        const { id } = req.query;
        for (let i = 0; i < weeklyBoss.length; i++) {
            if (id === weeklyBoss[i].id) {
                // const response = weeklyBoss[i];
                // console.log(response);
                const weeklyBossParse = WeeklyBoss_1.weeklyBossSchema.parse(weeklyBoss[i]);
                return res.status(200).json(weeklyBossParse);
            }
        }
        return res.status(404).json("This id doesn't match weekly boss id");
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
