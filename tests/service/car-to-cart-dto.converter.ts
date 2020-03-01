import { Converter } from "../../src/model/converter";
import { Convert } from "../../src/decorators/converter-decorator";
import Car from "../model/car";
import CarDto from "../dto/car-dto";

@Convert(Car, CarDto)
export default class CarToCarDtoConverter implements Converter<Car, CarDto> {
  
  public convert(source: Car): CarDto {
    const target = new CarDto();
    target.color = source.color;
    target.model = source.model;
    target.manufacturerName = source.manufacturer.name;
    return target;
  }

}


