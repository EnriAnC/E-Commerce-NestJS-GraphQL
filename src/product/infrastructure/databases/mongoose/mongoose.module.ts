import { Module } from "@nestjs/common";
import { MongoConfigService } from "./mongoose.service";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRootAsync({ useClass: MongoConfigService })],
})


export class MongoModule {};