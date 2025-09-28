import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrdersController from './orders.controller';
import Order from './orders.model';
import OrdersService from './orders.service';

const OrdersOrmModule = TypeOrmModule.forFeature([Order]);

@Module({
  controllers: [OrdersController],
  imports: [OrdersOrmModule],
  providers: [OrdersService],
  exports: [],
})
export default class OrdersModule {}
