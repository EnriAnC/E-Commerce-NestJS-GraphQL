import { ICreateProductInput } from 'src/product/domain/interfaces/create-product';
import { IUpdateProductInput } from 'src/product/domain/interfaces/update-product';
import { IProduct } from 'src/product/domain/interfaces/product';

export interface IProductRepository {
    findAll() : Promise<IProduct[]>
    findById(_id: string): Promise<IProduct | null>;
    create(createProductInput: ICreateProductInput): Promise<IProduct>;
    update(updateProductInput: IUpdateProductInput): Promise<IProduct | null>;
    delete(_id: string): Promise<void>;
}
