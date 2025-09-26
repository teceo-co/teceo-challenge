import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import ProductColor from '../product-colors.model';

export default class ListProductColorsFilter implements BaseFilter<ProductColor> {
  createWhere(queryBuilder: SelectQueryBuilder<ProductColor>): void {}
}
