import { ItemModel } from './item.mode';

export class ItemsModel implements IItemsModel {

  author: {
    name: string,
    lastname: string
  };
  categories: string[];
  items: ItemModel[] | undefined;

  constructor(data?: ItemsModel) {
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
      this.author = data.author;
      this.categories = data.categories;
      this.items = data.items;
    }
  }
}

export interface IItemsModel {
  author: {
    name: string,
    lastname: string
  };
  categories: string[];
  items: ItemModel[];
}


