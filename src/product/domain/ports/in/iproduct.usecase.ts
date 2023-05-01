import { ICreateProductInput } from 'src/product/domain/interfaces/create-product';
import { IUpdateProductInput } from 'src/product/domain/interfaces/update-product';
import { IProduct } from 'src/product/domain/interfaces/product';

export interface IProductUseCase {
    findAll( ) : Promise<IProduct[]>
    create(createProductInput: ICreateProductInput): Promise<IProduct>;
    findById(id: string): Promise<IProduct | null>;
    update(updateProductInput: IUpdateProductInput): Promise<IProduct | null>;
    delete(id: string): Promise<void>;
}
