import IConverter from "../../src/model/converter";
import Car from "../model/car";
import CarDto from "../dto/car-dto";
export default class CarToCarDtoConverter implements IConverter<Car, CarDto> {
    convert(source: Car): CarDto;
}
