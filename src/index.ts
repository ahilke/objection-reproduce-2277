import { ModelClass } from "objection";
import { BaseModel } from "./model";

export class BaseRepository<DerivedModel extends BaseModel> {
  Model: ModelClass<DerivedModel>;

  constructor(ORMModel: ModelClass<DerivedModel>) {
    this.Model = ORMModel;
  }

  delete(id: string) {
    return this.Model.query()
      .patch({ deletedAt: new Date() })
      .where("id", id)
      .returning("*")
      .first();
  }
}
