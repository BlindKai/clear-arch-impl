import { Entity } from "../Entity";
import { EntityDTO } from "../../../interfaces/EntiryDTO";
import { Validation, ValidationResult } from "../../interfaces/Validation";
import { ObjectMapping } from "../../interfaces/ObjectMapping";

export type EntityQuery = { include?: Array<string>; pageNumber?: number; pageSize?: number };

export abstract class AbstractEntityRepository implements Validation<EntityDTO>, ObjectMapping<Entity, EntityDTO> {
  abstract getAll(query?: EntityQuery): Promise<Entity[] | null>;
  abstract findOne(id: number): Promise<Entity | null>;
  abstract findMany(ids: Array<number>): Promise<Entity[] | null>;
  abstract create(entity: Entity): Promise<Entity | null>;
  abstract edit(id: number, entity: Entity): Promise<void>;
  abstract delete(id: number): Promise<void>;

  validate(dto: EntityDTO): ValidationResult<EntityDTO> {
    const { exampleField } = dto;
    const notEmpty = exampleField !== "";

    return notEmpty ? [null, dto] : [{ message: "Validation error", field: "exampleField" }, null];
  }

  fromDto(dto: EntityDTO): Entity {
    return {
      example_field: dto.exampleField,
    };
  }

  toDto(entity: Entity): EntityDTO {
    return {
      exampleField: entity.example_field,
    };
  }
}
