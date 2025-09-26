import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository, SelectQueryBuilder } from 'typeorm';
import type ListProductColorsFilter from './dtos/list-product-colors.filter';
import ProductColor from './product-colors.model';

@Injectable()
export default class ProductColorsService {
  constructor(
    @InjectRepository(ProductColor)
    private readonly repository: Repository<ProductColor>,
  ) {}

  createQueryBuilder(alias: string): SelectQueryBuilder<ProductColor> {
    return this.repository.createQueryBuilder(alias);
  }

  async list(filter: ListProductColorsFilter) {
    const productColors = this.createQueryBuilder('productColor').getMany();
    return productColors;
  }
}
