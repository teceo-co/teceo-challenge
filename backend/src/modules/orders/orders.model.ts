import { Column, Entity } from 'typeorm';
import BaseModel from '../../../commons/models/base.model';

@Entity('orders')
export default class Order extends BaseModel {
  @Column({ name: 'code', type: 'text' })
  code: string;

  @Column({ name: 'name', type: 'text' })
  name: string;

  @Column({ name: 'hex_code', type: 'text' })
  hexCode: string;
}
