import type APIService from "../../api-service";
import type { Product } from "./../../../types/index";

export class ProductsModel {
  private products: Product[] = [];
  private service: APIService;
  constructor(service: APIService) {
    this.service = service;
  }
  async loadProducts() {
    this.products = await this.service.fetchProducts();
  }
  getProducts() {
    return this.products;
  }
}
