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

    async insertChar(birthName: string, courtesyName: string, title:string, sect: string, weapon: Array<string>, picture:string) {
        const newChar = new this.charModel({ birthName: birthName, courtesyName:courtesyName, title:title, sect:sect, weapon:weapon, picture:picture });
        const result = await newChar.save();
        console.log(result);
        return result.id as string;
    }

    async getCharById(charId: string) {
        const char = await (await this.findChar(charId));
        return { birthName: char.birthName, courtesyName:char.courtesyName, title: char.title, sect: char.sect, weapon: char.weapon, picture: char.picture };
    }

    private async findChar(charId: string): Promise<Char> {
        let char;
        try {
            char = await this.charModel.findById(charId)

        } catch (error) {
            throw new NotFoundException('product does not exist');

        }
        if (!char) {
            throw new NotFoundException('product does not exist');
        }
        return char;
    }
}