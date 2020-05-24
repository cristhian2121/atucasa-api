import { Controller } from "../interfaces/controller.interface";
import { Application, Request, Response } from "express";
import { PgService } from "../services/db/pg-services";

export class GenericController implements Controller {
  private table = "";
  private pgService: PgService;

  constructor(private app: Application, table: string, path: string) {
    this.table = table;
    this.pgService = new PgService();
    this.app.route(`${path}`).get(this.getGeneric);
  }

  getGeneric = async (req: Request, res: Response) => {
    console.log("User");
    const dataRow = await this.pgService.get(
      "SELECT * FROM public.account ORDER BY user_id ASC LIMIT 100"
    );
    if(dataRow.state){
      console.log("accounts: ", dataRow.data.data);
    }
    res.status(200).json(dataRow.data.data);
  };

  putGeneric(req: Request, res: Response) {
    res.json("ok");
  }

  postGeneric(req: Request, res: Response) {
    res.json("ok");
  }

  deleteGeneric(req: Request, res: Response) {
    res.json("ok");
  }
}
