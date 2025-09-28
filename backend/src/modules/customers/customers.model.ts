import { Column, Entity } from 'typeorm';
import BaseModel from '../../../commons/models/base.model';

@Entity('customers')
export default class Customer extends BaseModel {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;
}
