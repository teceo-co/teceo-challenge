import { Controller, Get, Query } from '@nestjs/common';
import ListProductSizesFilter from './dtos/list-product-sizes.filter';
import ProductSizesService from './product-sizes.service';

@Controller('product-sizes')
export default class ProductSizesController {
  constructor(private readonly productSizesService: ProductSizesService) {}

  @Get()
  async list(@Query() filter: ListProductSizesFilter) {
    const skus = await this.productSizesService.list(filter);
  }
}
