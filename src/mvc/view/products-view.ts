import type { Product } from "../../../types";
import APIService from "../../api-service";
import { ProductsModel } from "../model/products-model";

export class ProductsView {
  container: HTMLElement;
  constructor(container: HTMLElement) {
    this.container = container;
  }
  renderProducts(products: Product[]) {
    this.container.innerHTML = "";
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${product.price.toFixed(2)} $</p>
          <button data-id="${product.id}">В корзину</button>
        `;
      this.container.append(card);
    });
  }
}
