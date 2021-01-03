import {ConversionHelper} from "../src/service/conversion-helper";
import CarToCarDtoConverter from "./service/car-to-cart-dto.converter";
import Car from "./model/car";
import CarDto from "./dto/car-dto";
import {converterRegistrySingleton} from "../src/model/converter-registry";

describe('Test Converter Name', () => {

  let conversionHelper: ConversionHelper = new ConversionHelper({logger: true});
  let carToCarDtoConverter: CarToCarDtoConverter = new CarToCarDtoConverter();

  it('test converter name', async () => {
    const converter = converterRegistrySingleton.getConverter(Car, CarDto);
    expect(converter).toBeDefined();
    expect(converter!.constructor.name).toBe('CarToCarDtoConverter');
  });


});
