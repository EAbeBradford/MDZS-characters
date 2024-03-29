import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharModule } from './characters/char.module';

import { MongooseModule } from '@nestjs/mongoose';

require('dotenv').config();


@Module({
  imports: [CharModule, 
    MongooseModule.forRoot(process.env.MONGODB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}