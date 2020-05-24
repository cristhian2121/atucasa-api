export interface PgInterface {
  get(query: string): Promise<any>;

  post(): Promise<any>;

  detele(): Promise<any>;

  put(): Promise<any>;
}
