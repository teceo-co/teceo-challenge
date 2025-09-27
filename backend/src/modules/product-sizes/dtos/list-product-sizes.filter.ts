import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import ProductSize from '../product-sizes.model';

export default class ListProductSizesFilter extends BaseFilter<ProductSize> {
  createWhere(queryBuilder: SelectQueryBuilder<ProductSize>): void {}
}
