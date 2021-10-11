import {getRepository} from 'typeorm';
import {User} from '../models/User';


interface UserData{
    name:string;
    email:string;
    password:string;
}

class CreateUserService{

    public async execute({name, email, password}:UserData){
        
        const user = {
            name,
            email,
            password
        }

        return user;
    }
}

export {CreateUserService}