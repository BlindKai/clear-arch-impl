export interface ObjectMapping<T, dto> {
  fromDto(dto: dto): T;
  toDto(entity: T): dto;
}
