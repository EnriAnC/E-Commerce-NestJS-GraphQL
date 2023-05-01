import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from '../../application/services/product.service';
import { CreateProductInput } from '../../application/dtos/in/create-product';
import { UpdateProductInput } from '../../application/dtos/in/update-product.input';
import { ProductDTO } from '../../application/dtos/out/product';


@Resolver( () => ProductDTO )
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query( () => [ProductDTO] )
  async getAllProducts() {
    return this.productService.findAll();
  }

  @Query( () => ProductDTO )
  async getProductById(@Args('findBy_id') _id: string) {
    return this.productService.findById(_id);
  }

  @Mutation( () => ProductDTO )
  async createProduct(@Args('createProductInput') createProductInput: CreateProductInput): Promise<ProductDTO> {
    return this.productService.create(createProductInput);
  }

  @Mutation( () => ProductDTO )
  async updateProduct(
    // @Args('_id') _id: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<ProductDTO | null> {
    return this.productService.update( updateProductInput );
  }

  @Mutation( () => ProductDTO )
  async deleteProduct(@Args('delete_id') _id: string): Promise<void> {
    return this.productService.delete(_id);
  }
}
