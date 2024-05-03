"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRouter = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.booksRouter = express_1.default.Router();
// Data
const books = require("../data/books.json");
//Type
const Books_1 = require("../models/Books");
// 1 - Route qui renvoie tout les matériaux d'ascension de personnages (livres)
exports.booksRouter.get("/books", (req, res) => {
    try {
        const allBooksParse = Books_1.allBooksSchema.parse(books);
        return res.status(200).json(allBooksParse);
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
// 2 - Route qui renvoie les détails des matériaux d'ascension de personnages (livres) par domaine
exports.booksRouter.get("/books/details", (req, res) => {
    try {
        const { id } = req.query;
        for (let i = 0; i < books.length; i++) {
            console.log(i);
            if (id === books[i].id) {
                const booksDetailsParse = Books_1.allBooksDetailsSchema.parse(books[i]);
                return res.status(200).json(booksDetailsParse);
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
