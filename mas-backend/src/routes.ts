import { response, Router } from "express"; 

const routes = Router();

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

export default routes;