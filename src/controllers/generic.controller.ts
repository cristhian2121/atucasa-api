import { Controller } from "../interfaces/controller.interface";
import { Application, Request, Response } from "express";

export class GenericController implements Controller {
  private table = "";

  constructor(private app: Application, path: string, table: string) {
    this.table = table;
    this.app.route(`${path}`)
      .get(this.getGeneric)
  }

  getGeneric(req: Request, res: Response ) {
    res.json('ok')
  }

  putGeneric(req: Request, res: Response ) {
    res.json('ok')
  }

  postGeneric(req: Request, res: Response ) {
    res.json('ok')
  }

  deleteGeneric(req: Request, res: Response ) {
    res.json('ok')
  }

}
