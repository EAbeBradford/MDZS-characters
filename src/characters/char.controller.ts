import { Controller, Post, Patch, Delete, Body, Get, Param } from '@nestjs/common';
import { CharService } from './char.service';

@Controller('characters')
export class CharController {
    constructor(private readonly charsService: CharService) { }
    
    @Get()
    async getAllProducts() {
        const chars = await this.charsService.getAllChars();
        return chars;
    }
}