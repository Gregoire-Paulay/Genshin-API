import express, { Request, Response } from "express";
import { ZodError, z } from "zod";
export const dailyRouter = express.Router();
import moment from "moment";

// Data
const daily = require("../data/daily.json");

//Type
import { allDailySchema } from "../models/Daily";

// 1 - Route qui renvoie les matériaux en fonction du jour
dailyRouter.get("/daily", (req: Request, res: Response) => {
  try {
    for (let i = 0; i < daily.length; i++) {
      if (daily[i].date === moment().format(`dddd`)) {
        const dailyGenshin = [];
        dailyGenshin.push(daily[i]);
        const dailyGenshinParsed = allDailySchema.parse(dailyGenshin);

        // console.log("C'EST LES DAILY ICI");
        return res.status(200).json(dailyGenshinParsed);
      }
    }
    return res.status(404).json("Date error");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});
