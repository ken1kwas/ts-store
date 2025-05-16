import type { ProductsModel } from "../model/products-model";
import type { ProductsView } from "../view/products-view";

export class ProductController {
  constructor(private model: ProductsModel, private view: ProductsView) {
    this.model = model;
    this.view = view;
  }
  async init() {
    await this.model.loadProducts();
    const products = this.model.getProducts();
    this.view.renderProducts(products);
  }
}
