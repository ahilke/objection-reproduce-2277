import { Model, Page, QueryBuilder } from "objection";

/*
 * Following https://vincit.github.io/objection.js/recipes/custom-query-builder.html
 */

export class BaseQueryBuilder<M extends Model, R = M[]> extends QueryBuilder<
  M,
  R
> {
  ArrayQueryBuilderType!: BaseQueryBuilder<M, M[]>;
  SingleQueryBuilderType!: BaseQueryBuilder<M, M>;
  MaybeSingleQueryBuilderType!: BaseQueryBuilder<M, M | undefined>;
  NumberQueryBuilderType!: BaseQueryBuilder<M, number>;
  PageQueryBuilderType!: BaseQueryBuilder<M, Page<M>>;
}

export class BaseModel extends Model {
  QueryBuilderType!: BaseQueryBuilder<this>;
  static QueryBuilder = BaseQueryBuilder;

  deletedAt: Date | null;
}
