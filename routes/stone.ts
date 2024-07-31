import express, { Request, Response } from "express";
import { ZodError, z } from "zod";
export const stoneRouter = express.Router();

// Data
const stone = require("../data/stone.json");

// Type
import { stoneListSchema, stoneDetailsSchema } from "../models/Stone";

// 1 - Route qui donne la liste des pierres d'amélioration de personnages
stoneRouter.get("/stone", (req: Request, res: Response) => {
  try {
    const stoneListParse = stoneListSchema.parse(stone);
    return res.status(200).json(stoneListParse);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});

// 2 - Route pour avoir les détails des pierres d'amélioration de personnage via son id ou name
stoneRouter.get("/stone/details", (req: Request, res: Response) => {
  try {
    const { id, name } = req.query;
    for (let i = 0; i < stone.length; i++) {
      if (id === stone[i].id || name === stone[i].name) {
        // console.log(i);
        const stoneDetailsParse = stoneDetailsSchema.parse(stone[i]);
        return res.status(200).json(stoneDetailsParse);
      }
    }

    return res.status(404).json("this id or name doesn't match");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});
