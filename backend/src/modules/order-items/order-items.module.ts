import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrderItem from './order-items.model';
import OrderItemsService from './order-items.service';

const OrderItemsOrmModule = TypeOrmModule.forFeature([OrderItem]);

@Module({
  controllers: [],
  imports: [OrderItemsOrmModule],
  providers: [OrderItemsService],
  exports: [OrderItemsService],
})
export default class OrderItemsModule {}
