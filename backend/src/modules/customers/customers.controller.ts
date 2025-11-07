import { Controller, Get, Query } from '@nestjs/common';
import CustomersService from './customers.service';
import ListCustomersFilter from './dtos/list-customers.filter';

@Controller('customers')
export default class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  async list(@Query() filter: ListCustomersFilter) {
    const customers = await this.customersService.list(filter);
  }
}
