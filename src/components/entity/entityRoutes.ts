import { Router } from "express";
import { getAllEntitiesController } from "./useCases/getAllEntitiesController";

const entityRouter = Router();

entityRouter.get("/", (req, res) => getAllEntitiesController.execute(req, res));

export { entityRouter };
