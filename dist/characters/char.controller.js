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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharController = void 0;
const common_1 = require("@nestjs/common");
const char_service_1 = require("./char.service");
let CharController = class CharController {
    constructor(charsService) {
        this.charsService = charsService;
    }
    async getAllProducts() {
        const chars = await this.charsService.getAllChars();
        return chars;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharController.prototype, "getAllProducts", null);
CharController = __decorate([
    (0, common_1.Controller)('characters'),
    __metadata("design:paramtypes", [char_service_1.CharService])
], CharController);
exports.CharController = CharController;
//# sourceMappingURL=char.controller.js.map