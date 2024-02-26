import express, { Request, Response } from "express";
import { ZodError, z } from "zod";
export const charactersRoute = express.Router();

// Data
const characters = require("../assets/data/characters.json");

//Type
import {
  charactersListSchema,
  characterDetailsSchema,
} from "../models/Characters";

// 1 - Route pour récupérer la liste des personnages de Genshin
charactersRoute.get("/characters", (req: Request, res: Response) => {
  try {
    const charactersListParse = charactersListSchema.parse(characters);
    return res.status(200).json(charactersListParse);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});

// 2 - Route pour récupérer les détails d'un personnage
charactersRoute.get("/characters/details", (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    for (let i = 0; i < characters.length; i++) {
      //   console.log(i);
      if (id === characters[i].id) {
        const charactersDetailsParse = characterDetailsSchema.parse(
          characters[i]
        );
        return res.status(200).json(charactersDetailsParse);
      }
    }

    return res.status(400).json("no match found for this id");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});
