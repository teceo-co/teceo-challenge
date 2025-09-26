import type { SelectQueryBuilder } from 'typeorm';
import type BaseFilter from '../../../../commons/filters/base.filter';
import type ProductColor from '../product-colors.model';

export default class ListProductColorsFilter implements BaseFilter<ProductColor> {
  createWhere(queryBuilder: SelectQueryBuilder<ProductColor>): void {}
}
