import { Converter } from "../../src/model/converter";
import Car from "../model/car";
import CarDto from "../dto/car-dto2";
export default class CarToCarDto2Converter implements Converter<Car, CarDto> {
    convert(source: Car): CarDto;
}
