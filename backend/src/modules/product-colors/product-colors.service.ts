import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import Page from '../../../commons/dtos/page.dto';
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

  async list(filter: ListProductColorsFilter) {
    const queryBuilder = this.createQueryBuilder().leftJoinAndSelect(
      'productColor.product',
      'product',
    );

    filter.paginate(queryBuilder);
    filter.createWhere(queryBuilder);

    const [productColors, total] = await queryBuilder.getManyAndCount();

    const productColorsWithColors = await this.getColorsForProductColors(productColors);

    return Page.of(productColorsWithColors, total);
  }

  async getColorsForProductColors(productColors: ProductColor[]) {
    for (const productColor of productColors) {
      const productColorWithColor = await this.createQueryBuilder()
        .leftJoinAndSelect('productColor.color', 'color')
        .where('productColor.id = :id', { id: productColor.id })
        .orderBy('lower(color.name)', 'ASC')
        .limit(100)
        .getOneOrFail();

      const correctProductColor = productColors.find((pc) => pc.id === productColor.id);

      if (correctProductColor) {
        correctProductColor.color = productColorWithColor.color;
      }
    }

    return productColors;
  }
}
