import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CustomersController from './customers.controller';
import Customer from './customers.model';
import CustomersService from './customers.service';

const CustomersOrmModule = TypeOrmModule.forFeature([Customer]);

@Module({
  controllers: [CustomersController],
  imports: [CustomersOrmModule],
  providers: [CustomersService],
  exports: [],
})
export default class CustomersModule {}
