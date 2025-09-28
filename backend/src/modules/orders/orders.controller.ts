import { Controller, Get, Query } from '@nestjs/common';
import ListOrdersFilter from './dtos/list-orders.filter';
import OrdersService from './orders.service';

@Controller('orders')
export default class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async list(@Query() filter: ListOrdersFilter) {
    const orders = await this.ordersService.list(filter);
  }
}
