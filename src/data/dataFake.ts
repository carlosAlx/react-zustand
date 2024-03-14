import { faker } from "@faker-js/faker";

export type Product = {
  id: string;
  image?: string;
  price: string;
  name: string;
  desc?: string;
  qt?: number;
  total?: number;
};
export type Item = {
  id: string;
  item: Product;
  qt: number;
  total: number;
};
export const createProduct = () => {
  const product = [];
  for (let i = 0; i <= 20; i++) {
    const data = {
      id: faker.string.uuid(),
      image: faker.image.urlPicsumPhotos(),
      price: faker.commerce.price(),
      name: faker.commerce.productName(),
      desc: faker.commerce.productDescription(),
    };
    product.push(data);
  }
  return product;
};
