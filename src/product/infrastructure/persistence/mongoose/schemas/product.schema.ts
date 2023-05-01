import { SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../models/product.model';


export const ProductSchema = SchemaFactory.createForClass(Product);
