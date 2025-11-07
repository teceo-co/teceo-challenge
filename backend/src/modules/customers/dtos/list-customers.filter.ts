import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import Customer from '../customers.model';

export default class ListCustomersFilter extends BaseFilter<Customer> {
  createWhere(queryBuilder: SelectQueryBuilder<Customer>): void {}
}
