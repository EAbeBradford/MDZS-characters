import { Module } from '@nestjs/common';
import { CharController } from './char.controller';
import { CharService } from './char.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CharSchema } from './char.model';
import { LocationSchema } from 'src/Locations/location.modle';

@Module({
  //imports: [ProductModule],
   imports: [MongooseModule.forFeature([{ name: 'Char', schema: CharSchema }]), MongooseModule.forFeature([{name: 'Location', schema: LocationSchema}])],
  controllers: [CharController],
  providers: [CharService]
})
export class CharModule { }