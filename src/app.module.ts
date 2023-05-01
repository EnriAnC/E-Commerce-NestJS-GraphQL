import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './product/ui/graphql/graphql.module';
import { MongoModule } from './product/infrastructure/databases/mongoose/mongoose.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, MongoModule, GraphqlModule, ],
  controllers: [AppController],
  providers: [
    AppService, 
  ],
})
export class AppModule {}
