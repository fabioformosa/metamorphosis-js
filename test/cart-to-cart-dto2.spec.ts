import CarToCarDtoConverter from "./service/car-to-cart-dto.converter";
import CarToCarDto2Converter from "./service/car-to-cart-dto2.converter";
import Car from "./model/car";
import CarDto from "./dto/car-dto2";
import Manufacturer from "./model/manufacturer";
import { ConversionService } from "src/service/conversion-service";

describe('Test CarToCarDtoConverter2', () => {

  let conversionService: ConversionService = new ConversionService({debugMode: true});
  let carToCarDtoConverter: CarToCarDtoConverter = new CarToCarDtoConverter();
  let carToCarDto2Converter: CarToCarDto2Converter = new CarToCarDto2Converter();

  it('test converter with dto with same name', ()=> {
    const ferrari = new Manufacturer('Ferrari', 'Italy');
    const car = new Car('purosangue', 'red', ferrari);

    const carDto: CarDto = <CarDto>(conversionService.convert(car, CarDto));
    expect(carDto.model).toBe('purosangue');
    expect(carDto.manufacturerName).toBe('Ferrari');
    expect(carDto.isRed).toBe(true);
    expect(carDto).not.toHaveProperty('color');
  });
  
});