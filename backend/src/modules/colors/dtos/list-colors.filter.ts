import type { SelectQueryBuilder } from 'typeorm';
import type BaseFilter from '../../../../commons/filters/base.filter';
import type Color from '../colors.model';

export default class ListColorsFilter implements BaseFilter<Color> {
  createWhere(queryBuilder: SelectQueryBuilder<Color>): void {}
}
