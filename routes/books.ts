import express, { Request, Response } from "express";
import { ZodError, z } from "zod";
export const booksRouter = express.Router();

// Data
const books = require("../data/books.json");

//Type
import { allBooksSchema, allBooksDetailsSchema } from "../models/Books";

// 1 - Route qui renvoie tout les matériaux d'ascension de personnages (livres)
booksRouter.get("/books", (req: Request, res: Response) => {
  try {
    const allBooksParse = allBooksSchema.parse(books);
    return res.status(200).json(allBooksParse);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(error);
    } else {
      return res.status(500).json(error);
    }
  }
});

// 2 - Route qui renvoie les détails des matériaux d'ascension de personnages (livres) par domaine
booksRouter.get("/books/details", (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    for (let i = 0; i < books.length; i++) {
      console.log(i);
      if (id === books[i].id) {
        const booksDetailsParse = allBooksDetailsSchema.parse(books[i]);
        return res.status(200).json(booksDetailsParse);
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
