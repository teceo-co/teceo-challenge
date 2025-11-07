import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from '../../../commons/models/base.model';
import Product from '../products/products.model';

@Entity('product_sizes')
export default class ProductSize extends BaseModel {
  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @Column({ name: 'name', type: 'text' })
  name: string;
}
