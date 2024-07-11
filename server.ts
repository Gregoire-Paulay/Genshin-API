import express, { Application, Request, Response } from "express";
const cors = require("cors");
const app: Application = express();
app.use(express.json()); // permet de manipuler les paramètre de type body
app.use(cors());

// Variables d'environnement
import { envVariables } from "./utils/envVariables";
const { PORT, NODE_ENV } = envVariables;

app.get("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json("Bienvenue sur l'API Genshin Impact");
  } catch (error: any) {
    return res.status(500).json({ message: "Sorry, the app doesn't respond" });
  }
});

// Mes routes
import { weeklyBossRouter } from "./routes/weeklyBoss";
import { charactersRouter } from "./routes/characters";
import { normalBossRouter } from "./routes/normalBoss";
import { stoneRouter } from "./routes/stone";
import { booksRouter } from "./routes/books";
import { dailyRouter } from "./routes/daily";
import { artifactsRouter } from "./routes/artifacts";
app.use(
  weeklyBossRouter,
  charactersRouter,
  normalBossRouter,
  stoneRouter,
  booksRouter,
  dailyRouter,
  artifactsRouter
);

// Toute les routes sauf celles crées au dessus arriveront ici
app.all("*", (req, res) => {
  return res.status(404).json("Not found");
});
//Pour écouter le serveur : ici on écoute la requete du port 3000
app.listen(PORT, () => {
  console.log(`server started on port : ${PORT} in ${NODE_ENV} mode`);
});
