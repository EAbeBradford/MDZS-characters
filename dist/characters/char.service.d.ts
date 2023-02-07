import { Char } from './char.model';
import { Model } from 'mongoose';
export declare class CharService {
    private readonly charModel;
    constructor(charModel: Model<Char>);
    getAllChars(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
    insertChar(birthName: string, courtesyName: string, title: string, sect: string, weapon: Array<string>, picture: string): Promise<string>;
}
