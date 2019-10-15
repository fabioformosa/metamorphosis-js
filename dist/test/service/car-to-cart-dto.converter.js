"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const converter_decorator_1 = require("../../src/decorators/converter-decorator");
const car_1 = require("../model/car");
const car_dto_1 = require("../dto/car-dto");
let CarToCarDtoConverter = class CarToCarDtoConverter {
    convert(source) {
        const target = new car_dto_1.default();
        target.color = source.color;
        target.model = source.model;
        target.manufacturerName = source.manufacturer.name;
        return target;
    }
};
CarToCarDtoConverter = __decorate([
    converter_decorator_1.Converter(car_1.default, car_dto_1.default)
], CarToCarDtoConverter);
exports.default = CarToCarDtoConverter;
//# sourceMappingURL=car-to-cart-dto.converter.js.map