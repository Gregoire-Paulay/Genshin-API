import express, { Request, Response } from "express";
import { ZodError, z } from "zod";

export const artifactsRouter = express.Router();

// Data
const artifacts = require("../data/artifacts.json");

//Type
import { allArtifactsSchema, artifactsSchemas } from "../models/Artifacts";

// 1 - Route qui renvoie tout les artéfacts
artifactsRouter.get("/artifacts", (req: Request, res: Response) => {
  try {
    const allArtifactsParsed = allArtifactsSchema.parse(artifacts);
    return res.status(200).json(allArtifactsParsed);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});

// 2 - Route qui renvoi un artefact via son id ou name
artifactsRouter.get("/artifacts/details", (req: Request, res: Response) => {
  try {
    const { id, name } = req.query;
    for (let i = 0; i < artifacts.length; i++) {
      // console.log(i);
      if (id === artifacts[i].id || name === artifacts[i].set_name) {
        const artifactsParsed = artifactsSchemas.parse(artifacts[i]);
        return res.status(200).json(artifactsParsed);
      }
    }

    return res.status(404).json("no match found for this id or name");
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});
