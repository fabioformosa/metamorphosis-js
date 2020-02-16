import { ConversionHelper } from "../src/service/conversion-helper";
import StudentDtoToStudentAsyncConverter from "./service/student-dto-to-student.async-converter";
import Student from "./model/student";
import StudentDto from "./dto/student-dto";

describe('Test Async Conversion', () => {

  let conversionHelper: ConversionHelper = new ConversionHelper();
  let studentDtoToStudentAsyncConverter: StudentDtoToStudentAsyncConverter = new StudentDtoToStudentAsyncConverter();

  it('test async conversion', async ()=> {
    const studentDto = new StudentDto('1', 'John Doe');

    const student: Student = <Student>(await conversionHelper.convert(studentDto, Student));
    expect(student.id).toBe('1');
    expect(student.name).toBe('John Doe');
  });
  
  
});