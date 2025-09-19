import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import type { Repository, SelectQueryBuilder } from "typeorm";
import type ListProductsFilter from "./dtos/list-products.filter";
import Product from "./products.model";

@Injectable()
export default class ProductsService {
	constructor(
			@InjectRepository(Product)
		private readonly repository: Repository<Product>) {}

	createQueryBuilder(alias: string): SelectQueryBuilder<Product> {
		return this.repository.createQueryBuilder(alias);
	}

	async list(filter: ListProductsFilter) {
		const products = this.createQueryBuilder("product").getMany();
		return products;
	}
}
