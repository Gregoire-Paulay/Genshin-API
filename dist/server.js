"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // permet de manipuler les paramètre de type body
app.use(cors());
// Variables d'environnement
const envVariables_1 = require("./utils/envVariables");
const { PORT, NODE_ENV } = envVariables_1.envVariables;
app.get("/", (req, res) => {
    try {
        return res.status(200).json("Bienvenue sur l'API Genshin Impact");
    }
    catch (error) {
        return res.status(500).json({ message: "Sorry, the app doesn't respond" });
    }
});
// Mes routes
const weeklyBoss_1 = require("./routes/weeklyBoss");
const characters_1 = require("./routes/characters");
const normalBoss_1 = require("./routes/normalBoss");
const stone_1 = require("./routes/stone");
const books_1 = require("./routes/books");
const daily_1 = require("./routes/daily");
app.use(weeklyBoss_1.weeklyBossRouter, characters_1.charactersRouter, normalBoss_1.normalBossRouter, stone_1.stoneRouter, books_1.booksRouter, daily_1.dailyRouter);
// Toute les routes sauf celles crées au dessus arriveront ici
app.all("*", (req, res) => {
    return res.status(404).json("Not found");
});
//Pour écouter le serveur : ici on écoute la requete du port 3000
app.listen(PORT, () => {
    console.log(`server started on port : ${PORT} in ${NODE_ENV} mode`);
});
