import Converter from "../../src/model/converter";
import { Convert } from "../../src/decorators/converter-decorator";
import Car from "../model/car";
import CarDto from "../dto/car-dto2";

@Convert(Car, CarDto)
export default class CarToCarDto2Converter implements Converter<Car, CarDto> {
  
  public convert(source: Car): CarDto {
    const target = new CarDto();
    target.model = source.model;
    target.isRed = source.color === 'red';
    target.manufacturerName = source.manufacturer.name;
    return target;
  }

}


