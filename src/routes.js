import { Router } from 'express';
import SessionController from './controller/SessionController';
import AnaliseController from './controller/AnaliseController';


const routes = new Router();

//rota para login e cadastro
routes.post('/sessions', SessionController.store);//cadastro
routes.post('/sessions/login', SessionController.login);  //login
routes.get('/sessions/todos', SessionController.listatodos);// lista todos
routes.delete('/sessions/cancel', SessionController.deletauser);//deleta

//rota para analises
routes.post('/analise', AnaliseController.store); //cadastro
routes.post('/analise/lista', AnaliseController.lista);//lista conforme o tipo de alcool
routes.get('/analise/lista/todos', AnaliseController.listatodos);// lista todos
routes.delete('/analise/cancel', AnaliseController.deletalista);//deleta por id(nao Habilitado)

// rota de teste
routes.get('/test', (req, res) => {
  return res.json('Acessado')
})

module.exports = routes;