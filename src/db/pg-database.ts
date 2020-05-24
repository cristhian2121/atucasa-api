import { Client, QueryResult } from "pg";
import { ResponseKH } from "../interfaces/utils/utils.interface";

export class PgDatabase {
  private static instance: PgDatabase;

  getInstance() {
    if (!PgDatabase.instance) {
      console.log("Create instance");
      PgDatabase.instance = new PgDatabase();
    }
    console.log("Return instance");
    return PgDatabase.instance;
  }

  async runQuery(query: string) {
    const client = new Client({
      user: "tkoevaie" || "KameHouse_dev",
      host: "ruby.db.elephantsql.com",
      database: "tkoevaie" || "atucasa",
      password: "7U5xP-t1qCejlGKvXRJ-6E1Uch0TopnY",
      port: 5432,
    });
    client.connect();
    let res: ResponseKH;
    try {
      const result = await client.query(query);
      res = {
        code: 200,
        state: true,
        data: {
          data: result.rows,
          count: result.rowCount,
          fields: result.fields,
        },
      };

      console.log("success to connect to db", result);
    } catch (e) {
      console.log("Error to connect to db");
      res = {
        code: 200,
        state: false,
        data: null,
      };
    }
    client.end();
    return res;
  }
}
