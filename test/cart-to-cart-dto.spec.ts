import CarToCarDtoConverter from "./service/car-to-cart-dto.converter";
import Car from "./model/car";
import CarDto from "./dto/car-dto";
import Manufacturer from "./model/manufacturer";
import { ConversionService } from "src/service/conversion-service";

describe('Test CarToCarDtoConverter', () => {

  let conversionService: ConversionService = new ConversionService();
  let carToCarDtoConverter: CarToCarDtoConverter = new CarToCarDtoConverter();

  it('test converter with conversion service', ()=> {
    const ferrari = new Manufacturer('Ferrari', 'Italy');
    const car = new Car('purosangue', 'red', ferrari);

    const carDto: CarDto = <CarDto>(conversionService.convert(car, CarDto));
    expect(carDto.color).toBe('red');
    expect(carDto.model).toBe('purosangue');
    expect(carDto.manufacturerName).toBe('Ferrari');
    expect(carDto).not.toHaveProperty('isRed');
  });
  
  it('test converter with dto with same name', ()=> {
    const ferrari = new Manufacturer('Ferrari', 'Italy');
    const car = new Car('purosangue', 'red', ferrari);

    const carDto: CarDto = <CarDto>(conversionService.convert(car, CarDto));
    expect(carDto.color).toBe('red');
    expect(carDto.model).toBe('purosangue');
    expect(carDto.manufacturerName).toBe('Ferrari');

  });
  
});