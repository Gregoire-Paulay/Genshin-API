import express, { Request, Response } from "express";
import { ZodError, z } from "zod";
export const weaponRouter = express.Router();

// Data
const weaponMaterials = require("../data/weaponMaterials.json");
const weapons = require("../data/weapons.json");

//Type
import {
  allWeaponMaterialsSchema,
  weaponMaterialsSchema,
  allWeaponsSchema,
  weaponSchema,
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
weaponRouter.get("/weapons", (req: Request, res: Response) => {
  try {
    const allWeaponParsed = allWeaponsSchema.parse(weapons);
    return res.status(200).json(allWeaponParsed);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});

// 4 - Route qui renvoie une arme en fonction de son id ou name
weaponRouter.get("/weapon/details", (req: Request, res: Response) => {
  try {
    const { id, name } = req.query;

    for (let i = 0; i < weapons.length; i++) {
      // console.log(i);
      if (id === weapons[i].id || name === weapons[i].name) {
        const weaponParsed = weaponSchema.parse(weapons[i]);
        return res.status(200).json(weaponParsed);
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
