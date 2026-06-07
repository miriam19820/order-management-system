import Product, { IProduct } from '../models/Product';

export const getAllProductsService = async (): Promise<IProduct[]> => {
  return await Product.find().sort({ name: 1 });
};

export const createProductService = async (productData: Partial<IProduct>): Promise<IProduct> => {
  const newProduct = new Product(productData);
  return await newProduct.save();
};