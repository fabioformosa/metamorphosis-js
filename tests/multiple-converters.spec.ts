import { ConversionHelper } from "../src/service/conversion-helper";
import StudentDtoToStudentAsyncConverter from "./service/student-dto-to-student.async-converter";
import Student from "./model/student";
import StudentDto from "./dto/student-dto";
import CarToCarDtoConverter from "./service/car-to-cart-dto.converter";
import Car from "./model/car";
import CarDto from "./dto/car-dto";
import Manufacturer from "./model/manufacturer";

describe('Test Async Conversion', () => {

  let conversionHelper: ConversionHelper = new ConversionHelper({logger: true});
  let studentDtoToStudentAsyncConverter: StudentDtoToStudentAsyncConverter = new StudentDtoToStudentAsyncConverter();
  let carToCarDtoConverter: CarToCarDtoConverter = new CarToCarDtoConverter();

  it('test multiple conversions', async ()=> {
    //first conversion
    const studentDto = new StudentDto('1', 'John Doe');

    const student: Student = <Student>(await conversionHelper.convert(studentDto, Student));
    expect(student.id).toBe('1');
    expect(student.name).toBe('John Doe');

    //second conversion
    const ferrari = new Manufacturer('Ferrari', 'Italy');
    const car = new Car('purosangue', 'red', ferrari);

    const carDto: CarDto = <CarDto> await conversionHelper.convert(car, CarDto);
    expect(carDto.color).toBe('red');
    expect(carDto.model).toBe('purosangue');
    expect(carDto.manufacturerName).toBe('Ferrari');
    expect(carDto).not.toHaveProperty('isRed');
  });
  
  
});
