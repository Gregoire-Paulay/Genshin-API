import express, { Request, Response } from "express";
import { ZodError } from "zod";
export const normalBossRouter = express.Router();

// Data
const normalBoss = require("../data/normalBoss.json");

// Type
import { normalBossListSchema, normalBossSchema } from "../models/NormalBoss";

// 1 - Route qui donne la liste des Boss normal
normalBossRouter.get("/boss/normal", (req: Request, res: Response) => {
  try {
    const normalBossListParse = normalBossListSchema.parse(normalBoss);
    return res.status(200).json(normalBossListParse);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});

// 2 - Route qui donne le détail sur un Boss normal via son id ou name
normalBossRouter.get("/boss/normal/details", (req: Request, res: Response) => {
  try {
    const { id, name } = req.query;
    for (let i = 0; i < normalBoss.length; i++) {
      // console.log(i);
      if (id === normalBoss[i].id || name === normalBoss[i].name) {
        const normalBossParse = normalBossSchema.parse(normalBoss[i]);
        return res.status(200).json(normalBossParse);
      }
    }

    return res
      .status(404)
      .json("This id doesn't match any normal boss id or name");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});
