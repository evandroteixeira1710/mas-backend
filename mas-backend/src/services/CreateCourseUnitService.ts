import {getRepository} from 'typeorm';
import {CourseUnit} from '../models/CourseUnit';

interface CourseUnitData{
    name: string;
    description: string;
}

class CreateCourseUnitService{
    public async execute(data:CourseUnitData){
        const {name,description} = data;

        const CourseUnitRepository = getRepository(CourseUnit);

        const checkCourseUnitExists = await CourseUnitRepository.findOne({name});

        if(checkCourseUnitExists){
            return{
                error:"Course Unit already exist"
                
            }
        }

        const courseUnit = CourseUnitRepository.create({
            name,
            description
        });

        await CourseUnitRepository.save(courseUnit);

        return courseUnit;
      }
}


/*


class CreateCourseUnitService{
    public async execute(data:CourseUnitData){
        const {name,description} = data;

        const courseUnit = {
            name,
            description
        }

        return courseUnit;
    }
}

export {CreateCourseUnitService};
*/