"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharModule = void 0;
const common_1 = require("@nestjs/common");
const char_controller_1 = require("./char.controller");
const char_service_1 = require("./char.service");
const mongoose_1 = require("@nestjs/mongoose");
const char_model_1 = require("./char.model");
let CharModule = class CharModule {
};
CharModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Char', schema: char_model_1.CharSchema }])],
        controllers: [char_controller_1.CharController],
        providers: [char_service_1.CharService]
    })
], CharModule);
exports.CharModule = CharModule;
//# sourceMappingURL=char.module.js.map