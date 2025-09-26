import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import Color from '../colors.model';

export default class ListColorsFilter implements BaseFilter<Color> {
  createWhere(queryBuilder: SelectQueryBuilder<Color>): void {}
}
