import { Controller, Get, Query } from '@nestjs/common';
import ListProductColorsFilter from './dtos/list-product-colors.filter';
import ProductColorsService from './product-colors.service';

@Controller('product-colors')
export default class ProductColorsController {
  constructor(private readonly productColorsService: ProductColorsService) {}

  @Get()
  async list(@Query() filter: ListProductColorsFilter) {
    const productColors = await this.productColorsService.list(filter);
    return productColors;
  }
}
