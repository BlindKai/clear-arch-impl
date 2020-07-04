import { RawResult, QueryParams, ExecuteResult, QueryResult } from "./database";

/**
 * Abstraction for entity gateway.
 */
export interface AbstractDatabase {
  /**
   * Execute raw sql statement without any placeholders or values to be escaped.
   * @param {string} sql statement that should be executed.
   * @returns `array` of results, `ExecutionResult` if no `T` specified or `null` if query failed.
   */
  raw<T>(sql: string): Promise<RawResult<T>>;

  /**
   * Execute sql operation with usage of placeholders and value escaping.
   * @param {QueryParams} params `sql` string with placeholders and `values` array to be escaped.
   * @returns `ExecutionResult` object if the operation was successfull or `null` if some error occured.
   */
  execute(params: QueryParams): Promise<ExecuteResult>;

  /**
   * Perform standart sql query with opportunity to use placeholders and `values`.
   * @param params `sql` string with placeholders and `values` array to be escaped.
   * @returns `array` of results or `null` if the query result is empty.
   */
  query<T>(params: QueryParams): Promise<QueryResult<T>>;

  /**
   * Terminate the connection or the database instance
   */
  terminate(): Promise<void>;
}
