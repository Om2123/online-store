import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interfaces/Product';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private ProductModel: Model<Product>) {}

  async getProducts() {
    return await this.ProductModel.find();
  }

  async getProduct(id: string) {
    return await this.ProductModel.findById(id);
  }

  async createProduct(Product: CreateProductDTO) {
    const newProduct = new this.ProductModel(Product);
    return await newProduct.save();
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.ProductModel.findByIdAndDelete(id);
  }

  async updateProduct(
    id: string,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    return await this.ProductModel.findByIdAndUpdate(id, createProductDTO);
  }
}
