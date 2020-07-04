import { BaseController } from "../../../interfaces/BaseController";
import { Request, Response } from "express";
import { AbstractEntityRepository } from "../../repositories/AbstractEntityRepository";

export class GetAllEntitiesController extends BaseController {
  private repo: AbstractEntityRepository;

  constructor(repository: AbstractEntityRepository) {
    super();
    this.repo = repository;
  }

  protected async executeImpl(req: Request, res: Response) {
    const entities = await this.repo.getAll();
    entities !== null ? this.ok(res, null, entities) : this.notFound(res);
  }
}
