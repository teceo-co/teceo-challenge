import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
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

  list(filter: ListOrdersFilter) {
    const orders = this.createQueryBuilder('order').getMany();
    return orders;
  }
}
