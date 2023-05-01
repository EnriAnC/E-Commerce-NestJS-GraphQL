import { Prop, Schema } from '@nestjs/mongoose';
import { IProduct } from 'src/product/domain/interfaces/product';

@Schema()
export class Product implements IProduct{
  _id: string;

  @Prop({ type:String, required:true })
  name: string;

  @Prop({ type:Number, required:true })
  price: number;  

  @Prop({ type:String, required:true })
  description: string;

}
