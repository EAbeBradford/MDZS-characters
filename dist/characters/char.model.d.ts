import * as mongoose from 'mongoose';
export declare const CharSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    picture: string;
    birthName?: string;
    courtesyName?: string;
    title?: string;
    sect?: string;
    weapon?: string[];
}>;
export interface Char extends mongoose.Document {
    id: string;
    birthName: string;
    courtesyName: string;
    title: string;
    sect: string;
    weapon: Array<string>;
    picture: string;
}
