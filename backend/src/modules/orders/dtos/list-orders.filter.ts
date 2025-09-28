import { IsString } from 'class-validator';
import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import Order from '../orders.model';

export default class ListOrdersFilter extends BaseFilter<Order> {
  @IsString()
  orderCode?: string;

  createWhere(queryBuilder: SelectQueryBuilder<Order>): void {
    if (this.orderCode) {
      queryBuilder.andWhere('order.code = :orderCode', { orderCode: this.orderCode });
    }
  }
}
