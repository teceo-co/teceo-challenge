import { IsOptional, IsString } from 'class-validator';
import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import ProductColor from '../product-colors.model';

export default class ListProductColorsFilter extends BaseFilter<ProductColor> {
  @IsOptional()
  @IsString()
  colorCodeOrName?: string;

  createWhere(queryBuilder: SelectQueryBuilder<ProductColor>): void {
    if (this.colorCodeOrName) {
      queryBuilder.andWhere(
        `color.code ILIKE (:colorCodeOrName) OR color.name ILIKE (:colorCodeOrName)`,
        { colorCodeOrName: this.colorCodeOrName },
      );
    }
  }
}
