import type { SelectQueryBuilder } from 'typeorm';
import type BaseFilter from '../../../../commons/filters/base.filter';
import type Product from '../products.model';

export default class ListProductsFilter implements BaseFilter<Product> {
  createWhere(queryBuilder: SelectQueryBuilder<Product>): void {}
}
