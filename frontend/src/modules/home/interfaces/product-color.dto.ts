import { BaseDTO } from '../../../interfaces/base.dto';
import type { CardItem } from './home-product-color-list-item.interface';

interface Product {
  id: string;
  createdAt: string;
  updatedAt: string;
  code: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface Color {
  id: string;
  createdAt: string;
  updatedAt: string;
  code: string;
  name: string;
  hexCode: string;
}

export class ProductColorDTO extends BaseDTO<ProductColorDTO> {
  id: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
  color: Color;
  price: number;

  static toCardItem(dto: ProductColorDTO): CardItem {
    return {
      imageUrl: dto.product.imageUrl,
      price: dto.price,
      subTitle: dto.color.name,
      title: dto.product.name,
    };
  }
}
