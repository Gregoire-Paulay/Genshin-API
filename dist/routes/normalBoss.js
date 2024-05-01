"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalBossRouter = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.normalBossRouter = express_1.default.Router();
// Data
const normalBoss = require("../data/normalBoss.json");
// Type
const NormalBoss_1 = require("../models/NormalBoss");
// 1 - Route qui donne la liste des Boss normal
exports.normalBossRouter.get("/boss/normal", (req, res) => {
    try {
        const normalBossListParse = NormalBoss_1.normalBossListSchema.parse(normalBoss);
        return res.status(200).json(normalBossListParse);
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
// 2 - Route qui donne le détail sur un Boss normal
exports.normalBossRouter.get("/boss/normal/details", (req, res) => {
    try {
        const { id } = req.query;
        for (let i = 0; i < normalBoss.length; i++) {
            // console.log(i);
            if (id === normalBoss[i].id) {
                const normalBossParse = NormalBoss_1.normalBossSchema.parse(normalBoss[i]);
                return res.status(200).json(normalBossParse);
            }
        }
        return res.status(404).json("This id doesn't match any normal boss id");
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
