import axios from 'axios';

export class PrintifyService {
  private apiKey: string;
  private apiUrl: string = 'https://api.printify.com/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Create a product in Printify
  async createProduct(productData: any) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/products.json`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error creating product: ${error.message}`);
    }
  }

  // Create an order in Printify
  async createOrder(orderData: any) {
    try {
      const response = await axios.post(
        `${this.apiUrl}/orders.json`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error creating order: ${error.message}`);
    }
  }
}
