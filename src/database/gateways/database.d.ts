export type ExecutionResult = {
  insertedId?: number | string;
  rowsAffected?: number;
  rowsChanged?: number;
  status: string | object;
};

export type QueryParams = {
  sql: string;
  values?: Array<any>;
};

export type RawResult<T> = T[] | ExecutionResult | null | undefined;
export type ExecuteResult = ExecutionResult | null | undefined;
export type QueryResult<T> = T[] | null | undefined;
