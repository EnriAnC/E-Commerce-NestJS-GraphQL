import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { GraphQLNonNullExceptionFilter } from './http/Graphql-exception.handler';
import { ErrorInterceptor } from './http/Error.interceptor';
import { HttpExceptionFilter } from './http/Http-exception.handler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters( new HttpExceptionFilter());

  // app.useGlobalFilters( new GraphQLNonNullExceptionFilter())

  app.useGlobalInterceptors(new ErrorInterceptor());

  await app.listen(3000);
}
bootstrap();
