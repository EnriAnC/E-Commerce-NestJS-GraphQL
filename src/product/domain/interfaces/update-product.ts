import { ICreateProductInput } from "./create-product";

export interface IUpdateProductInput extends ICreateProductInput{
    _id: string;
}