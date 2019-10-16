import { Converter } from "../../src/model/converter";
import Car from "../model/car";
import CarDto from "../dto/car-dto";
export default class CarToCarDtoConverter implements Converter<Car, CarDto> {
    convert(source: Car): CarDto;
}
