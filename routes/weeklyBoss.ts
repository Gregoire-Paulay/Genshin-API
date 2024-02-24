import express, { Request, Response } from "express";
import { ZodError, z } from "zod";
export const weeklyBossRouter = express.Router();

// Data
const weeklyBoss = require("../assets/data/weeklyBoss.json");

//Type
import { weeklyBossSchema, weeklyBossListSchema } from "../models/WeeklyBoss";

// 1 - Route pour récupérer la liste des Boss Weekly avec leur loot unique
weeklyBossRouter.get("/weeklyBoss", async (req: Request, res: Response) => {
  try {
    const weeklyBossListParse = weeklyBossListSchema.parse(weeklyBoss);
    return res.status(200).json(weeklyBossListParse);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});

// 2 - Route pour avoir le détail d'un Boss
weeklyBossRouter.get("/weeklyBoss/details", (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    for (let i = 0; i < weeklyBoss.length; i++) {
      if (id === weeklyBoss[i].id) {
        // const response = weeklyBoss[i];
        // console.log(response);
        const weeklyBossParse = weeklyBossSchema.parse(weeklyBoss[i]);

        return res.status(200).json(weeklyBossParse);
      }
    }

    return res.status(200).json("No match found for this id");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});
