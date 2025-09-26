import type { SelectQueryBuilder } from 'typeorm';
import type BaseFilter from '../../../../commons/filters/base.filter';
import type ProductSize from '../product-sizes.model';

export default class ListProductSizesFilter implements BaseFilter<ProductSize> {
  createWhere(queryBuilder: SelectQueryBuilder<ProductSize>): void {}
}
