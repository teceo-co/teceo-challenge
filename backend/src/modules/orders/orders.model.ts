import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from '../../../commons/models/base.model';
import Customer from '../customers/customers.model';
import { OrderStatus } from './enums/order-status.enum';

@Entity('orders')
export default class Order extends BaseModel {
  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column({ name: 'total', type: 'numeric' })
  total: number;

  @Column({ name: 'status', type: 'enum', enum: OrderStatus, default: OrderStatus.DRAFT })
  status: OrderStatus;
}
