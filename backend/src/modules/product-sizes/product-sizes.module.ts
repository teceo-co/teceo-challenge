import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ProductSizesController from './product-sizes.controller';
import ProductSize from './product-sizes.model';
import ProductSizesService from './product-sizes.service';

const ProductSizesOrmModule = TypeOrmModule.forFeature([ProductSize]);

@Module({
  controllers: [ProductSizesController],
  imports: [ProductSizesOrmModule],
  providers: [ProductSizesService],
  exports: [],
})
export default class ProductSizesModule {}
