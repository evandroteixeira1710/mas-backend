import {Request, Response} from 'express';
import { CreateCourseUnitService } from '../services/CreateCourseUnitService';
import { GetCourseUnitsService } from '../services/GetCourseUnitsService';


class CourseUnitController{
    async create(request:Request, response:Response){
        const courseUnitData = request.body;

        const createcourseUnit = new CreateCourseUnitService();
        
        const course = await createcourseUnit.execute(courseUnitData);
        
        return response.json(course);


    }

    async show (request:Request, response:Response){
        const userId = request.body.user;

        const getCoursesUnits = new GetCourseUnitsService();

        const courseunits = await getCoursesUnits.execute(userId);

        return response.json(courseunits);


    }


}

export {CourseUnitController};