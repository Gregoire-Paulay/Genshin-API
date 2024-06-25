"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyRouter = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.dailyRouter = express_1.default.Router();
const moment_1 = __importDefault(require("moment"));
// Data
const daily = require("../data/daily.json");
//Type
const Daily_1 = require("../models/Daily");
// 1 - Route qui renvoie les matériaux en fonction du jour
exports.dailyRouter.get("/daily", (req, res) => {
    try {
        for (let i = 0; i < daily.length; i++) {
            if (daily[i].date === (0, moment_1.default)().format(`dddd`)) {
                const dailyGenshin = [];
                dailyGenshin.push(daily[i]);
                const dailyGenshinParsed = Daily_1.allDailySchema.parse(dailyGenshin);
                // console.log("C'EST LES DAILY ICI");
                return res.status(200).json(dailyGenshinParsed);
            }
        }
        return res.status(404).json("Date error");
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
