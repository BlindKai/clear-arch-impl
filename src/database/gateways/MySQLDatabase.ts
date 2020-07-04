import { AbstractDatabase } from "./AbstractDatabase";
import { Pool, createPool, PoolOptions, RowDataPacket, FieldPacket, OkPacket } from "mysql2/promise";
import { RawResult, QueryParams, ExecuteResult, QueryResult } from "./database";

type MySQLExecute = [OkPacket, FieldPacket[]];
type MySQLQuery = [RowDataPacket[], FieldPacket[]];

export class MySQLDatabase implements AbstractDatabase {
  private _pool: Pool;

  constructor(config: PoolOptions) {
    this._pool = createPool(config);
  }

  public get pool(): Pool {
    return this._pool;
  }

  raw<T>(sql: string): Promise<RawResult<T>> {
    throw new Error("Method not implemented.");
  }

  async execute({ sql, values }: QueryParams): Promise<ExecuteResult> {
    const [ok]: MySQLExecute = this.has(values) ? await this._pool.query({ sql, values }) : await this._pool.query(sql);
    const { affectedRows, changedRows, insertId, message } = ok;
    return { status: message, rowsAffected: affectedRows, insertedId: insertId, rowsChanged: changedRows };
  }

  async query<T>({ sql, values }: QueryParams): Promise<QueryResult<T>> {
    const [rows]: MySQLQuery = this.has(values) ? await this._pool.query({ sql, values }) : await this._pool.query(sql);
    return rows as T[];
  }

  async terminate(): Promise<void> {
    await this._pool.end();
  }

  private has(property: any): boolean {
    return typeof property !== "undefined";
  }
}
