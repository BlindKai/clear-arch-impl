import { AbstractEntityRepository, EntityQuery } from "./AbstractEntityRepository";
import { Entity } from "../Entity";
import { Pool } from "mysql2/promise";

export class EntityRepository extends AbstractEntityRepository {
  private db: Pool;

  constructor(db: Pool) {
    super();
    this.db = db;
  }

  getAll(query?: EntityQuery): Promise<Entity[] | null> {
    const results: Entity[] = [{ example_field: "1" }, { example_field: "2" }];
    return Promise.resolve(results);
  }

  findOne(id: number): Promise<Entity | null> {
    throw new Error("Method not implemented.");
  }

  findMany(ids: number[]): Promise<Entity[] | null> {
    throw new Error("Method not implemented.");
  }

  create(entity: Entity): Promise<Entity | null> {
    throw new Error("Method not implemented.");
  }

  edit(id: number, entity: Entity): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
