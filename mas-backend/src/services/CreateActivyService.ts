import {getRepository} from 'typeorm';
import {Activy} from '../models/Activy';


    interface ActivyData {
        name: string;
        activy_date: string;
        grade:number;
        course_unit_id: string;
}


class CreateActivyService {
    public async execute(data:ActivyData){
        const {name,activy_date,grade, course_unit_id} = data;

        const activyRepository = getRepository(Activy);

        const checkActivyToCourseUnitExists = await activyRepository.findOne({name, course_unit_id});

        if(checkActivyToCourseUnitExists){
            return{
                error:"Activy to Course Unit already exist"
            }
        }

        const activy = activyRepository.create({
        name,
        activy_date,
        grade,
        course_unit_id
});
    await activyRepository.save(activy);
    return activy;
}
}
export {CreateActivyService};