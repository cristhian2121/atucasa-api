import { GenericController } from "./generic.controller";
import { Application } from "express";
import { TABLE_USER } from "../models/constaint";

export const controllers = (app:Application) => [
  new GenericController(app, TABLE_USER, '/user')
]
