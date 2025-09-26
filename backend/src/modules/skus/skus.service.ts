import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import ListSkusFilter from './dtos/list-skus.filter';
import Sku from './skus.model';

@Injectable()
export default class SkusService {
  constructor(
    @InjectRepository(Sku)
    private readonly repository: Repository<Sku>,
  ) {}

  createQueryBuilder(alias: string): SelectQueryBuilder<Sku> {
    return this.repository.createQueryBuilder(alias);
  }

  list(filter: ListSkusFilter) {
    const skus = this.createQueryBuilder('sku').getMany();
    return skus;
  }
}
