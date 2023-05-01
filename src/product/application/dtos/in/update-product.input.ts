import { IUpdateProductInput } from 'src/product/domain/interfaces/update-product';
import { CreateProductInput } from './create-product';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends CreateProductInput implements IUpdateProductInput{
  @Field(() => String)
  _id: string;
}