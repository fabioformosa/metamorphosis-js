"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_to_cart_dto_converter_1 = require("./service/car-to-cart-dto.converter");
const car_1 = require("./model/car");
const car_dto_1 = require("./dto/car-dto");
const manufacturer_1 = require("./model/manufacturer");
const conversion_service_1 = require("src/conversion-service");
describe('Test CarToCarDtoConverter', () => {
    let carToCarDtoConverter = new car_to_cart_dto_converter_1.default();
    let conversionService = new conversion_service_1.default();
    it('test converter with conversion service', () => {
        const ferrari = new manufacturer_1.default('Ferrari', 'Italy');
        const car = new car_1.default('purosangue', 'red', ferrari);
        const carDto = (conversionService.convert(car, car_dto_1.default));
        expect(carDto.color).toBe('red');
        expect(carDto.model).toBe('purosangue');
        expect(carDto.manufacturerName).toBe('Ferrari');
    });
});
//# sourceMappingURL=cart-to-cart-dto.spec.js.map