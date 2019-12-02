import CarToCarDtoConverter from "./service/car-to-cart-dto.converter";
import Car from "./model/car";
import CarDto from "./dto/car-dto";
import Manufacturer from "./model/manufacturer";
import { ConversionHelper } from "src/service/conversion-helper";

describe('Test CarToCarDtoConverter', () => {

  let conversionHelper: ConversionHelper = new ConversionHelper();
  let carToCarDtoConverter: CarToCarDtoConverter = new CarToCarDtoConverter();

  it('test converter with conversion service', ()=> {
    const ferrari = new Manufacturer('Ferrari', 'Italy');
    const car = new Car('purosangue', 'red', ferrari);

    const carDto: CarDto = <CarDto>(conversionHelper.convert(car, CarDto));
    expect(carDto.color).toBe('red');
    expect(carDto.model).toBe('purosangue');
    expect(carDto.manufacturerName).toBe('Ferrari');
    expect(carDto).not.toHaveProperty('isRed');
  });
  
  it('test converter with dto with same name', ()=> {
    const ferrari = new Manufacturer('Ferrari', 'Italy');
    const car = new Car('purosangue', 'red', ferrari);

    const carDto: CarDto = <CarDto>(conversionHelper.convert(car, CarDto));
    expect(carDto.color).toBe('red');
    expect(carDto.model).toBe('purosangue');
    expect(carDto.manufacturerName).toBe('Ferrari');

  });
  
});