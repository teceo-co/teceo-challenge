import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import Order from '../orders.model';

export default class ListOrdersFilter extends BaseFilter<Order> {
  createWhere(queryBuilder: SelectQueryBuilder<Order>): void {}
}
