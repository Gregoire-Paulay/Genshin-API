import express, { Request, Response } from "express";
import { ZodError, z } from "zod";
export const weaponRouter = express.Router();

// Data
const weaponMaterials = require("../data/weaponMaterials.json");

//Type
import {
  allWeaponMaterialsSchema,
  weaponMaterialsSchema,
} from "../models/Weapon";

// 1 - Route qui renvoie tout les matériaux d'ascension des armes
weaponRouter.get("/weapon/materials", (req: Request, res: Response) => {
  try {
    const allWeaponMaterialsParsed =
      allWeaponMaterialsSchema.parse(weaponMaterials);
    return res.status(200).json(allWeaponMaterialsParsed);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});

// 2 - Route qui renvoie 1 domaine de materiau d'ascension d'armes via son id
weaponRouter.get("/weapon/materials/details", (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    for (let i = 0; i < weaponMaterials.length; i++) {
      //   console.log(i);
      if (id === weaponMaterials[i].id) {
        const weaponMaterialsParsed = weaponMaterialsSchema.parse(
          weaponMaterials[i]
        );
        return res.status(200).json(weaponMaterialsParsed);
      }
    }

    return res.status(404).json("no match found for this id");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});

// 3 - Route qui renvoie toutes les armes
