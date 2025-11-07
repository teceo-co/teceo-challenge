import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from '../../../commons/models/base.model';
import Order from '../orders/orders.model';
import Sku from '../skus/skus.model';

@Entity('order_items')
export default class OrderItem extends BaseModel {
  @ManyToOne(() => Sku)
  @JoinColumn({ name: 'sku_id' })
  sku: Sku;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column({ name: 'quantity', type: 'numeric' })
  quantity: number;
}
