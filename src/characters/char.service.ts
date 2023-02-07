import { Injectable, NotFoundException } from '@nestjs/common';
import { ignoreElements } from 'rxjs';
import { Char } from './char.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { title } from 'process';

@Injectable()
export class CharService {

    constructor(@InjectModel('Char') private readonly charModel: Model<Char>) { }

    async getAllChars() {
        const chars = await this.charModel.find().exec();
        return chars.map(c => ({ id: c.id, 
            birthName: c.birthName,
            courtesyName: c.courtesyName,
            title: c.title,
            sect: c.sect,
            weapon: c.weapon, 
            picture: c.picture 
        }));
    }

}