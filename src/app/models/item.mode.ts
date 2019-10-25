export class ItemModel {

  id: string;
  title: string;
  price: {
    currency: string,
    amount: number;
    decimals: number
  };
  address: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;

  constructor(data?: ItemModel) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          (this as any)[property] = (data as any)[property];
        }
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.id = data.id;
      this.title = data.title;
      this.price = data.price;
      this.address = data.string;
      this.picture = data.price;
      this.condition = data.condition;
      this.free_shipping = data.freeShipping;
      this.sold_quantity = data.sold_quantity;
      this.description = data.description;
    }
  }
}
