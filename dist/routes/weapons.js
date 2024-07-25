"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weaponRouter = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.weaponRouter = express_1.default.Router();
// Data
const weaponMaterials = require("../data/weaponMaterials.json");
const weapons = require("../data/weapons.json");
//Type
const Weapon_1 = require("../models/Weapon");
// 1 - Route qui renvoie tout les matériaux d'ascension des armes
exports.weaponRouter.get("/weapon/materials", (req, res) => {
    try {
        const allWeaponMaterialsParsed = Weapon_1.allWeaponMaterialsSchema.parse(weaponMaterials);
        return res.status(200).json(allWeaponMaterialsParsed);
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
// 2 - Route qui renvoie 1 domaine de materiau d'ascension d'armes via son id
exports.weaponRouter.get("/weapon/materials/details", (req, res) => {
    try {
        const { id } = req.query;
        for (let i = 0; i < weaponMaterials.length; i++) {
            //   console.log(i);
            if (id === weaponMaterials[i].id) {
                const weaponMaterialsParsed = Weapon_1.weaponMaterialsSchema.parse(weaponMaterials[i]);
                return res.status(200).json(weaponMaterialsParsed);
            }
        }
        return res.status(404).json("no match found for this id");
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
// 3 - Route qui renvoie toutes les armes
exports.weaponRouter.get("/weapons", (req, res) => {
    try {
        const allWeaponParsed = Weapon_1.allWeaponsSchema.parse(weapons);
        return res.status(200).json(allWeaponParsed);
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
// 4 - Route qui renvoie une arme en fonction de son id
exports.weaponRouter.get("/weapon/details", (req, res) => {
    try {
        const { id } = req.query;
        for (let i = 0; i < weapons.length; i++) {
            // console.log(i);
            if (id === weapons[i].id) {
                const weaponParsed = Weapon_1.weaponSchema.parse(weapons[i]);
                return res.status(200).json(weaponParsed);
            }
        }
        return res.status(404).json("no match found for this id");
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
