"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CharService = class CharService {
    constructor(charModel) {
        this.charModel = charModel;
    }
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
    async insertChar(birthName, courtesyName, title, sect, weapon, picture) {
        const newChar = new this.charModel({ birthName: birthName, courtesyName: courtesyName, title: title, sect: sect, weapon: weapon, picture: picture });
        const result = await newChar.save();
        console.log(result);
        return result.id;
    }
    async getCharById(charId) {
        const char = await (await this.findChar(charId));
        return { birthName: char.birthName, courtesyName: char.courtesyName, title: char.title, sect: char.sect, weapon: char.weapon, picture: char.picture };
    }
    async findChar(charId) {
        let char;
        try {
            char = await this.charModel.findById(charId);
        }
        catch (error) {
            throw new common_1.NotFoundException('product does not exist');
        }
        if (!char) {
            throw new common_1.NotFoundException('product does not exist');
        }
        return char;
    }
};
CharService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Char')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CharService);
exports.CharService = CharService;
//# sourceMappingURL=char.service.js.map