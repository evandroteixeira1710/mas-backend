import {Router} from 'express';
import { ActivyController } from './controller/ActivyController';
import { AuthenticateController } from './controller/AutheticateController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserController } from './controller/UserController';
import authenticated from './middlewares/authenticated';

const userController = new UserController();
const courseUnitController = new CourseUnitController();
const activyController = new ActivyController();
const authController = new AuthenticateController();

const routes = Router();

//routes.get('/', userController.test);
routes.post('/auth', authController.create);

routes.post('/user', userController.create);
routes.get('/user', authenticated, userController.show);

routes.post('/activy',authenticated, activyController.create);
routes.get('/activy', authenticated, activyController.show);

routes.post('/courseunit',authenticated, courseUnitController.create);
routes.get('/courseunit', authenticated, courseUnitController.show);

export default routes;



/*
import { response, Router, request } from "express"; 
import { ActivyController } from "./controller/ActivyController";
import { CourseUnitController } from "./controller/CourseUnitController";
import { UserController } from "./controller/UserController";
import {AuthenticateController}from './controller/AutheticateController';
import authenticated from "./middlewares/authenticated";


interface UserRequest{
    name: string;
    email: string;
    password: string;
}

routes.get('/query', (request, response) => {
    const {consulta} = request.query;
    
    return response.json({
        consultaRetorno: consulta
    });

});


routes.get('/hello', (request, response) => response.json({message:"Hello World..."}));

routes.get('./:teste', (request, response) => {
    const {teste} = request.params;

    return response.json({
        parametro: teste
    });
});


routes.post


routes.get('/user/:id/', (request, response) => {
    const {id} = request.params;
    response.json({
    userId:id
    });
    });



routes.get('/user/', (request, response) => {
    const {nome, idade} = request.query
    response.json({
    idade,
    nome
    });
  });



routes.post('/user', (request, response) => {
const {name, email, password} = request.body
const user = {
name,
email,
password
}
return response.json(user);
});    


const userController = new UserController();
const activyController = new ActivyController();
const courseUnitController = new CourseUnitController();
const authenticateController = new AuthenticateController();



const routes = Router();

routes.post('/auth', authenticateController.create);

routes.get('/user',authenticated, userController.show);
routes.get ('activy', authenticated, activyController.show);
routes.get ('courseunit', authenticated, courseUnitController.show);

routes.post('/user', userController.create);
routes.post('/activy', authenticated, activyController.create);
routes.post('/courseunit',authenticated, courseUnitController.create);

export default routes;
*/