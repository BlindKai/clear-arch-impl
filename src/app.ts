import express from "express";
import { entityRouter } from "./components/entity/entityRoutes";

const app = express();

app.get("/", (req, res) => res.send("Welcome!"));
app.use("/entities", entityRouter);

export { app };
