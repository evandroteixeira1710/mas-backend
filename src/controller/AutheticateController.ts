import {Request, Response} from "express";
import { RepositoryNotTreeError } from "typeorm";
import auth from "../config/auth";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateController{
    async create(request:Request, response:Response){
        const authData = request.body;

        const authenticateUser = new AuthenticateUserService();
        const auth = await authenticateUser.execute(authData);
        return response.json(auth);
    }
}
export {AuthenticateController};