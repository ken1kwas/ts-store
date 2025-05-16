import "./style.css";
import APIService from "./api-service";
import { ProductController } from "./mvc/controller/products-controller";
import { ProductsModel } from "./mvc/model/products-model";
import { ProductsView } from "./mvc/view/products-view";

const api = new APIService();
const model = new ProductsModel(api);
const view = new ProductsView(document.querySelector("#product-list")!);
const controller = new ProductController(model, view);
controller.init();
