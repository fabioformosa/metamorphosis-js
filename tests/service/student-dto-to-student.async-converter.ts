import { Converter} from "../../src/model/converter";
import { Convert } from "../../src/decorators/converter-decorator";
import Student from "../model/student";
import StudentDto from "../dto/student-dto";

@Convert(StudentDto, Student)
export default class StudentDtoToStudentAsyncConverter implements Converter<StudentDto, Promise<Student>> {
  
  public async convert(source: StudentDto): Promise<Student> {
    const target = await this._simulateDBRetrieve(source.id);
    target.name = source.name;
    return target;
  }

  async _simulateDBRetrieve(id: string) {
    const retrievedStudent = new Student();
    retrievedStudent.id = id;
    return retrievedStudent;
  }

}


