import Color from '../../colors/colors.model';
import Product from '../../products/products.model';

export interface ListProductColorsDTO {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  product: Product;
  color: Color;
  price: number;
}
