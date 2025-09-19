import type { ObjectLiteral, SelectQueryBuilder } from "typeorm";

export default abstract class BaseFilter<T extends ObjectLiteral> {
	createWhere(_queryBuilder: SelectQueryBuilder<T>) {}
}
