import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import Page from '../../../commons/dtos/page.dto';
import ListOrdersFilter from './dtos/list-orders.filter';
import Order from './orders.model';

@Injectable()
export default class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {}

  createQueryBuilder(alias: string): SelectQueryBuilder<Order> {
    return this.repository.createQueryBuilder(alias);
  }

  async list(filter: ListOrdersFilter) {
    const queryBuilder = this.createQueryBuilder('order').leftJoinAndSelect(
      'order.customer',
      'customer',
    );

    filter.createWhere(queryBuilder);
    filter.paginate(queryBuilder);

    const [orders, count] = await queryBuilder.getManyAndCount();

    return Page.of(orders, count);
  }
}
