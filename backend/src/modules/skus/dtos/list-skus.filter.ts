import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import Sku from '../skus.model';

export default class ListSkusFilter extends BaseFilter<Sku> {
  createWhere(queryBuilder: SelectQueryBuilder<Sku>): void {}
}
