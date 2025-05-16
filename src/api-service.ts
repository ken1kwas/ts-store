import axios from "axios";

class APIService {
  async fetchProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
}

export default APIService;
