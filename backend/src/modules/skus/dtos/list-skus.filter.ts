import type { SelectQueryBuilder } from "typeorm";
import type BaseFilter from "../../../../commons/filters/base.filter";
import type Sku from "../skus.model";

export default class ListSkusFilter implements BaseFilter<Sku> {
	createWhere(queryBuilder: SelectQueryBuilder<Sku>): void {}
}
