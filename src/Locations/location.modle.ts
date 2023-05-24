import * as mongoose from 'mongoose';
import { Char, CharSchema } from 'src/characters/char.model';

export const LocationSchema = new mongoose.Schema({
    sect: {type: String, required:true},
    didItGetDestroyed: {type: Boolean, required:false},
    charchers: {type: [CharSchema], required:false},
    description: {type: String, required:false},
    picture: {type: String, required: true},
 
});

export interface Location extends mongoose.Document {
    id: string,
    sect: string,
    didItGetDestroyed: boolean,
    charchers: Array<Char>,
    description: string,
    picture: string,
}