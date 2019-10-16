import IConverter from "../../src/model/converter";
import { Converter } from "../../src/decorators/converter-decorator";
import Car from "../model/car";
import CarDto from "../dto/car-dto2";

@Converter(Car, CarDto)
export default class CarToCarDto2Converter implements IConverter<Car, CarDto> {
  
  public convert(source: Car): CarDto {
    const target = new CarDto();
    target.model = source.model;
    target.isRed = source.color === 'red';
    target.manufacturerName = source.manufacturer.name;
    return target;
  }

}


