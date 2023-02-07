import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharModule } from './characters/char.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CharModule, MongooseModule.forRoot('mongodb+srv://bradford:bradford@cluster0.xj5lqs3.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}