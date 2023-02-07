import { CharService } from './char.service';
export declare class CharController {
    private readonly charsService;
    constructor(charsService: CharService);
    getAllProducts(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
}
