import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import ListOrdersFilter from './dtos/list-orders.filter';
import UpdateOrderDTO from './dtos/update-order.dto';
import OrdersService from './orders.service';

@Controller('orders')
export default class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async list(@Query() filter: ListOrdersFilter) {
    const orders = await this.ordersService.list(filter);
    return orders;
  }

  @Patch('/:id')
  async update(@Param('id') orderId: string, @Body() order: UpdateOrderDTO) {
    const updatedOrder = await this.ordersService.update(orderId, order);
    return updatedOrder;
  }
}
