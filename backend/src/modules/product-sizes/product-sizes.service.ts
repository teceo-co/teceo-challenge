import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import ListProductSizesFilter from './dtos/list-product-sizes.filter';
import ProductSize from './product-sizes.model';

@Injectable()
export default class ProductSizesService {
  constructor(
    @InjectRepository(ProductSize)
    private readonly repository: Repository<ProductSize>,
  ) {}

  createQueryBuilder(alias: string): SelectQueryBuilder<ProductSize> {
    return this.repository.createQueryBuilder(alias);
  }

  list(filter: ListProductSizesFilter) {
    const productSizes = this.createQueryBuilder('productSize').getMany();
    return productSizes;
  }
}
