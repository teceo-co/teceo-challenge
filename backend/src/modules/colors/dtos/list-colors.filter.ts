import { SelectQueryBuilder } from 'typeorm';
import BaseFilter from '../../../../commons/filters/base.filter';
import Color from '../colors.model';

export default class ListColorsFilter extends BaseFilter<Color> {
  createWhere(queryBuilder: SelectQueryBuilder<Color>): void {}
}
