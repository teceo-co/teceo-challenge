import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import Customer from './customers.model';
import ListCustomersFilter from './dtos/list-customers.filter';

@Injectable()
export default class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  createQueryBuilder(alias: string): SelectQueryBuilder<Customer> {
    return this.repository.createQueryBuilder(alias);
  }

  list(filter: ListCustomersFilter) {
    const customers = this.createQueryBuilder('customers').getMany();
    return customers;
  }
}
