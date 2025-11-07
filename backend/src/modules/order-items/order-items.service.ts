import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import OrderItem from './order-items.model';

@Injectable()
export default class OrderItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly repository: Repository<OrderItem>,
  ) {}

  createQueryBuilder(alias: string): SelectQueryBuilder<OrderItem> {
    return this.repository.createQueryBuilder(alias);
  }
}
