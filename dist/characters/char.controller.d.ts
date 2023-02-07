import { CharService } from './char.service';
export declare class CharController {
    private readonly charsService;
    constructor(charsService: CharService);
    getAllChars(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
    addProduct(charBirthName: string, charCourtesyName: string, charTitle: string, charSect: string, charWeapon: Array<string>, charPicture: string): Promise<{
        id: string;
    }>;
    getCharById(charId: string): Promise<{
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }>;
}
