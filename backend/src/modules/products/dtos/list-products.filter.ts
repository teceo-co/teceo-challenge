import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import Product from '../products.model';

export default class ListProductsFilter implements BaseFilter<Product> {
  createWhere(queryBuilder: SelectQueryBuilder<Product>): void {}
}
