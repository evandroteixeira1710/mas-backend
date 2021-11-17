import {getRepository} from 'typeorm';
import {sign} from 'jsonwebtoken';
import {compare} from 'bcryptjs';
import authConfig from '../config/auth';
import {User} from '../models/User';

interface AuthData {
    email: string;
    password: string;
}

class AuthenticateUserService{

    public async execute({email,password}: AuthData): Promise<string | {}> {

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({email});

        if(!user) {
            return {
                error: 'user not exist'
            }
        }

        const comparePassword = await compare(password, user.password);

        if(!comparePassword) {
            return {
                error: 'incorrect password'
            }
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({"role":"user"}, secret, {
            //algorithm: 'RS256',
            subject: user.id,
            expiresIn
        })

        const {id, name, email:emailUser} = user

        return {
            user:{
                id,
                name,
                email: emailUser
            },
            token
        };
    }

}

export {AuthenticateUserService};


/*
import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../models/User";
import authConfig from "../config/auth";
import { sign } from "jsonwebtoken";

interface AuthData {
    email: string;
    password: string
}

class AuthenticateUserService {  

    public async execute(data:AuthData):Promise<string | {}>{
        const {email, password} = data;

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({email});

        if(!user){
            return {
                error:'User not found'
            }
        }

        const comparePassword = await compare(password,user.password);

        if(!comparePassword){
            return {
                error: 'Incorrect password'
            }
        }

        const {privateKey,expiresIn} = authConfig.jwt;

        const token = sign({"role":"user"},privateKey,{
            //algorithm:"RS256",
            subject:user.id,
            expiresIn
        });

        const {id, name, email:emailUser} = user

        return {
            user:{
                id,
                name,
                email: emailUser
            },
            token
        };
    }

}

export {AuthenticateUserService}




/*import {getRepository} from 'typeorm';
import {sign} from 'jsonwebtoken';
import {compare} from 'bcryptjs';
import authConfig from '../config/auth';
import {User} from '../models/User';

interface AuthData {
    email: string;
    password: string;
}

class AuthenticateUserService{

    public async execute({email,password}: AuthData): Promise<String | {}> {

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({email});

        if(!user) {
            return {
                error: 'user not exist'
            }
        }

        const comparePassword = await compare(password, user.password);

        if(!comparePassword) {
            return {
                error: 'incorrect password'
            }
        }

        const { privateKey, expiresIn } = authConfig.jwt;

        const token = sign({"role":"user"}, privateKey, {
            algorithm: 'RS256',
            subject: user.id,
            expiresIn
        })

        const {id, name, email:emailUser} = user

        return {
            user:{
                id,
                name,
                email: emailUser
            },
            token
        };
    }

}

export {AuthenticateUserService};
/*import { compare } from "bcryptjs";
import {sign} from 'jsonwebtoken';
import { getRepository } from "typeorm";
import authConfig from '../config/auth'
import { User } from "../models/User";

interface AuthData{
    email:string;
    password:string;
}


class AuthenticateUserService{
    public async execute({email, password}:AuthData): Promise<String | {}>{

        const userRepository = getRepository(User)
        const user = await userRepository.findOne({email});
        if(!user){
            return{
                error:'User not Found'
            }
        }

        const comparePassword = compare(password, user.password)

        if(!comparePassword){
            return {
                error:'Incorrect Password'
            }
        }

        const {secret,expiresIn} = authConfig.jwt

        const token = sign({"role":"user"}, secret,{
            subject:user.id,
            expiresIn
        })
        return token;
    }
}

export {AuthenticateUserService}
*/
