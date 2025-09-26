import { Controller, Get, Query } from '@nestjs/common';
import ListProductsFilter from './dtos/list-products.filter';
import ProductsService from './products.service';

@Controller('products')
export default class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async list(@Query() filter: ListProductsFilter) {
    const productColors = await this.productsService.list(filter);
  }
}
