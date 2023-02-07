import { Char } from './char.model';
import { Model } from 'mongoose';
export declare class CharService {
    private readonly charModel;
    constructor(charModel: Model<Char>);
}
