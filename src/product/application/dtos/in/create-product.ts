import { InputType, Field } from '@nestjs/graphql';
import { ICreateProductInput } from '../../../domain/interfaces/create-product'

@InputType()
export class CreateProductInput implements ICreateProductInput {
  
  @Field(() => String, { description: 'Name of the product', nullable:true })
  name: string;

  @Field(() => Number, { description: 'Price of the product', nullable:true })
  price: number;

  @Field(() => String, { description: 'Description of the product', nullable:true })
  description: string;
  
}