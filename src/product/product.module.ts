import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './infrastructure/persistence/mongoose/models/product.model';
import { ProductSchema } from './infrastructure/persistence/mongoose/schemas/product.schema';
import { ProductService } from './application/services/product.service';
import { ProductResolver } from './ui/resolvers/product.resolver';
import { ProductRepository } from './infrastructure/persistence/repositories/mongoose.repository';


@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  providers: [
    ProductService, 
    ProductResolver, 
    {
      provide: 'IProductRepository',
      useClass: ProductRepository
    },
  ],
})
export class ProductModule {}

