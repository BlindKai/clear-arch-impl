export type ValidationError = {
  message: string;
  field: string;
};

export type ValidationResult<dto> = [null | ValidationError, dto | null];

export interface Validation<dto> {
  validate(dto: dto): ValidationResult<dto>;
}
