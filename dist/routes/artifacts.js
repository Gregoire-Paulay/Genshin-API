"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.artifactsRouter = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.artifactsRouter = express_1.default.Router();
// Data
const artifacts = require("../data/artifacts.json");
//Type
const Artifacts_1 = require("../models/Artifacts");
// 1 - Route qui renvoie tout les artéfacts
exports.artifactsRouter.get("/artifacts", (req, res) => {
    try {
        const allArtifactsParsed = Artifacts_1.allArtifactsSchema.parse(artifacts);
        return res.status(200).json(allArtifactsParsed);
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
// 2 - Route qui renvoi un artefact via son id ou name
exports.artifactsRouter.get("/artifacts/details", (req, res) => {
    try {
        const { id, name } = req.query;
        for (let i = 0; i < artifacts.length; i++) {
            // console.log(i);
            if (id === artifacts[i].id || name === artifacts[i].set_name) {
                const artifactsParsed = Artifacts_1.artifactsSchemas.parse(artifacts[i]);
                return res.status(200).json(artifactsParsed);
            }
        }
        return res.status(404).json("no match found for this id or name");
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
