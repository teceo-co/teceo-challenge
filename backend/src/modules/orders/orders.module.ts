import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrderItemsModule from '../order-items/order-items.module';
import OrdersController from './orders.controller';
import Order from './orders.model';
import OrdersService from './orders.service';

const OrdersOrmModule = TypeOrmModule.forFeature([Order]);

@Module({
  controllers: [OrdersController],
  imports: [OrdersOrmModule, OrderItemsModule],
  providers: [OrdersService],
  exports: [],
})
export default class OrdersModule {}
