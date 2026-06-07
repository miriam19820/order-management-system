import { Request, Response } from 'express';
import * as productService from '../services/productService';
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'שגיאה בשליפת המוצרים', error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProductService(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: 'שגיאה בשמירת המוצר', error });
  }
};