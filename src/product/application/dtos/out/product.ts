import { Field, ObjectType } from '@nestjs/graphql';
import { IProduct } from 'src/product/domain/interfaces/product';

@ObjectType()
export class ProductDTO implements IProduct {

  @Field(() => String)
  _id: string;
  
  @Field(() => String, { description: 'Name of the product', nullable:true })
  name: string;

  @Field(() => Number, { description: 'Price of the product', nullable:true })
  price: number;

  @Field(() => String, { description: 'Description of the product', nullable:true })
  description: string;
  
}