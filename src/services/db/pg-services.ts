import { PgInterface } from "../../interfaces/pg-interface";
import { PgDatabase } from "../../db/pg-database";

export class PgService implements PgInterface {

  private pgDatabase = new PgDatabase()

  constructor(){
    this.pgDatabase.getInstance()
  }

  async get(query: string) {
    const result = await this.pgDatabase.runQuery(query)
    return Promise.resolve(result);
  }

  put() {
    this.pgDatabase.runQuery('')
    return Promise.resolve();
  }

  post() {
    this.pgDatabase.runQuery('')
    return Promise.resolve();
  }

  detele() {
    this.pgDatabase.runQuery('')
    return Promise.resolve();
  }
}
