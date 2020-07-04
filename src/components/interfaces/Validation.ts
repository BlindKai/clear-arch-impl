export type ValidationError = {
  message: string;
  field: string;
};

export type ValidationResult<dto> = [ValidationError | null, dto | null];

export interface Validation<dto> {
  validate(dto: dto): ValidationResult<dto>;
}
