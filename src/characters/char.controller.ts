import { Controller, Post, Patch, Delete, Body, Get, Param } from '@nestjs/common';
import { CharService } from './char.service';

@Controller('characters')
export class CharController {
    constructor(private readonly charsService: CharService) { }
    
    @Get()
    async getAllChars() {
        const chars = await this.charsService.getAllChars();
        return chars;
    }

    @Post()
    async addProduct(
        @Body('birthName') charBirthName: string, 
        @Body('courtesyName') charCourtesyName: string, 
        @Body('title') charTitle: string,
        @Body('sect') charSect: string, 
        @Body('weapon') charWeapon: Array<string>, 
        @Body('picture') charPicture: string,
        ) {

        const generatedId = await this.charsService.insertChar(charBirthName, charCourtesyName, charTitle, charSect, charWeapon, charPicture);
        return { id: generatedId };
    }
}