import { GetAllEntitiesController } from "./GetAllEntitiesController";
import { EntityRepository } from "../../repositories/EntityRepository";
import { pool } from "../../../../database";

const entitiesRepository = new EntityRepository(pool);
const getAllEntitiesController = new GetAllEntitiesController(entitiesRepository);

export { getAllEntitiesController };
