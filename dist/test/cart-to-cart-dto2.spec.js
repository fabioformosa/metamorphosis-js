"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_to_cart_dto_converter_1 = require("./service/car-to-cart-dto.converter");
const car_to_cart_dto2_converter_1 = require("./service/car-to-cart-dto2.converter");
const car_1 = require("./model/car");
const car_dto2_1 = require("./dto/car-dto2");
const manufacturer_1 = require("./model/manufacturer");
const conversion_service_1 = require("src/service/conversion-service");
describe('Test CarToCarDtoConverter', () => {
    let carToCarDtoConverter = new car_to_cart_dto_converter_1.default();
    let carToCarDto2Converter = new car_to_cart_dto2_converter_1.default();
    let conversionService = new conversion_service_1.ConversionService();
    it('test converter with dto with same name', () => {
        const ferrari = new manufacturer_1.default('Ferrari', 'Italy');
        const car = new car_1.default('purosangue', 'red', ferrari);
        const carDto = (conversionService.convert(car, car_dto2_1.default));
        expect(carDto.model).toBe('purosangue');
        expect(carDto.manufacturerName).toBe('Ferrari');
        expect(carDto.isRed).toBe(true);
        expect(carDto).not.toHaveProperty('color');
    });
});
//# sourceMappingURL=cart-to-cart-dto2.spec.js.map