import CarToCarDtoConverter from "./service/car-to-cart-dto.converter";
import Car from "./model/car";
import CarDto from "./dto/car-dto";
import Manufacturer from "./model/manufacturer";
import { ConversionHelper} from "../src/service/conversion-helper";

describe('Test CarToCarDtoConverter', () => {
  const mockLogger = jest.fn();

  let conversionHelper: ConversionHelper = new ConversionHelper({logger: mockLogger});
  let carToCarDtoConverter: CarToCarDtoConverter = new CarToCarDtoConverter();

  it('test converter with conversion service', async () => {
    const ferrari = new Manufacturer('Ferrari', 'Italy');
    const car = new Car('purosangue', 'red', ferrari);

    const carDto: CarDto = <CarDto> await conversionHelper.convert(car, CarDto);
    expect(carDto.color).toBe('red');
    expect(carDto.model).toBe('purosangue');
    expect(carDto.manufacturerName).toBe('Ferrari');
    expect(carDto).not.toHaveProperty('isRed');

    expect(mockLogger).toHaveBeenCalled();
  });
  
});