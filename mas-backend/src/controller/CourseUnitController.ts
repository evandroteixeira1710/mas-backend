import {Request, Response} from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';


class CourseUnitController{
    async create(request:Request, response:Response){
        const courseUnitData = request.body

        const createcourseUnit = new CreateCourseUnitService();
        
        const course = await createcourseUnit.execute(courseUnitData);
        
        return response.json(course);


    }


}

export {CourseUnitController};