import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import ListProductColorsFilter from './dtos/list-product-colors.filter';
import ProductColor from './product-colors.model';

@Injectable()
export default class ProductColorsService {
  constructor(
    @InjectRepository(ProductColor)
    private readonly repository: Repository<ProductColor>,
  ) {}

  createQueryBuilder(): SelectQueryBuilder<ProductColor> {
    return this.repository.createQueryBuilder('productColor');
  }

  list(filter: ListProductColorsFilter) {
    const queryBuilder = this.createQueryBuilder()
      .leftJoinAndSelect('productColor.color', 'color')
      .leftJoinAndSelect('productColor.product', 'product');

    filter.paginate(queryBuilder);
    filter.createWhere(queryBuilder);

    return queryBuilder.getMany();
  }
}
