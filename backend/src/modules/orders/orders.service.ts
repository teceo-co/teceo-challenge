import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import Page from '../../../commons/dtos/page.dto';
import OrderItemsService from '../order-items/order-items.service';
import { ListOrdersDTO } from './dtos/list-orders.dto';
import ListOrdersFilter from './dtos/list-orders.filter';
import Order from './orders.model';

@Injectable()
export default class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,

    private readonly orderItemsService: OrderItemsService,
  ) {}

  createQueryBuilder(alias: string): SelectQueryBuilder<Order> {
    return this.repository.createQueryBuilder(alias);
  }

  async list(filter: ListOrdersFilter): Promise<Page<ListOrdersDTO>> {
    const queryBuilder = this.createQueryBuilder('order').leftJoinAndSelect(
      'order.customer',
      'customer',
    );

    filter.createWhere(queryBuilder);
    filter.paginate(queryBuilder);

    const [orders, count] = await queryBuilder.getManyAndCount();

    const ordersWithTotals = await this.getOrdersWithTotals(orders);

    return Page.of(ordersWithTotals, count);
  }

  private async getOrdersWithTotals(orders: Order[]): Promise<ListOrdersDTO[]> {
    const ordersWithTotals: ListOrdersDTO[] = [];

    for (const order of orders) {
      const orderItems = await this.orderItemsService
        .createQueryBuilder('orderItem')
        .leftJoinAndSelect('orderItem.sku', 'sku')
        .leftJoinAndSelect('sku.productColor', 'productColor')
        .where('orderItem.order.id = :orderId', { orderId: order.id })
        .getMany();

      let totalValue = 0;
      orderItems.forEach((orderItem) => {
        totalValue += orderItem.sku.price * orderItem.quantity;
      });

      let totalQuantity = 0;
      orderItems.forEach((orderItem) => {
        totalQuantity += orderItem.quantity;
      });

      const orderProductColorIds: string[] = [];
      orderItems.forEach((orderItem) => {
        if (orderItem.sku) {
          const productColorId = orderItem.sku.productColor.id;
          if (!orderProductColorIds.includes(productColorId)) {
            orderProductColorIds.push(productColorId);
          }
        }
      });
      const totalProductColors = orderProductColorIds.length;

      ordersWithTotals.push({
        ...order,
        totalValue,
        totalQuantity,
        totalProductColors,
      });
    }

    return ordersWithTotals;
  }
}
