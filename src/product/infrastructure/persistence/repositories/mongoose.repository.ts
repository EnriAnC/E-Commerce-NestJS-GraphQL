import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../mongoose/models/product.model';
import { CreateProductInput } from '../../../application/dtos/in/create-product';
import { UpdateProductInput } from '../../../application/dtos/in/update-product.input';
import { ProductDTO } from 'src/product/application/dtos/out/product';
import { IProductRepository } from 'src/product/domain/ports/out/imongoose.repository';

@Injectable()
export class ProductRepository {
  constructor( @InjectModel(Product.name) 
    private readonly productModel: Model<Product & IProductRepository>
  ) {}

  async findAll(): Promise<ProductDTO[]> {
    return this.productModel.find();
  }

  async findById(id: string): Promise<ProductDTO | null > {
    return this.productModel.findById(id!).exec();
  }

  async create(createProductInput: CreateProductInput): Promise<ProductDTO> {
    const createdProduct = new this.productModel(createProductInput);
    return createdProduct.save();
  }

  async update( updateProductInput: UpdateProductInput): Promise<ProductDTO | null> {
    return this.productModel.findByIdAndUpdate(updateProductInput._id, updateProductInput, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.productModel.findByIdAndDelete(id).exec();
  }
  
}
