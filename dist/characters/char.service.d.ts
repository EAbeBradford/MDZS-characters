import { Char } from './char.model';
import { Model } from 'mongoose';
export declare class CharService {
    private readonly charModel;
    private readonly locationModel;
    constructor(charModel: Model<Char>, locationModel: Model<Location>);
    getAllGusu(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
    getbyName(birthname: string): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
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
    getCharById(charId: string): Promise<{
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }>;
    updateCharById(charId: string, birthName: string, courtesyName: string, title: string, sect: string, weapon: Array<string>, picture: string): Promise<void>;
    deleteCharById(charId: string): Promise<void>;
    private findChar;
}
