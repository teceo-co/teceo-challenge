import { Controller, Get, Query } from '@nestjs/common';
import ListSkusFilter from './dtos/list-skus.filter';
import SkusService from './skus.service';

@Controller('skus')
export default class SkusController {
  constructor(private readonly skusService: SkusService) {}

  @Get()
  async list(@Query() filter: ListSkusFilter) {
    const skus = await this.skusService.list(filter);
  }
}
