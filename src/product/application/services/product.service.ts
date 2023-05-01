import { Inject, Injectable } from '@nestjs/common';
import { CreateProductInput } from '../dtos/in/create-product';
import { UpdateProductInput } from '../dtos/in/update-product.input';
import { IProductUseCase } from 'src/product/domain/ports/in/iproduct.usecase';
import { IProduct } from 'src/product/domain/interfaces/product';


@Injectable()
export class ProductService{
  constructor(@Inject('IProductRepository') private readonly productUseCase: IProductUseCase) {}

  async findAll(): Promise<IProduct[]> {
    return this.productUseCase.findAll();
  }

  async findById(_id: string): Promise<IProduct | null> {
    return this.productUseCase.findById(_id);
  }

  async create(createProductInput: CreateProductInput): Promise<IProduct> {
    return this.productUseCase.create(createProductInput);
  }

  async update(updateProductInput: UpdateProductInput): Promise<IProduct | null> {
    return this.productUseCase.update(updateProductInput);
  }

  async delete(_id: string): Promise<void> {
    return this.productUseCase.delete(_id);
  }
}
