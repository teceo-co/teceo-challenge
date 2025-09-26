import { JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from '../../../commons/models/base.model';
import Color from '../colors/colors.model';
import Product from '../products/products.model';

export default class ProductColor extends BaseModel {
  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @ManyToOne(() => Color)
  @JoinColumn({ name: 'color_id', referencedColumnName: 'id' })
  color: Color;
}
