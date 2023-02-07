import { Module } from '@nestjs/common';
import { CharController } from './char.controller';
import { CharService } from './char.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CharSchema } from './char.model';

@Module({
  //imports: [ProductModule],
   imports: [MongooseModule.forFeature([{ name: 'Char', schema: CharSchema }])],
  controllers: [CharController],
  providers: [CharService]
})
export class CharModule { }