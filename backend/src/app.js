const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json()); // Informa ao Express para utilizar o body das requisições em formato json
app.use(routes);
app.use(errors());

module.exports = app;

/*
  <-- HTTP Request -->

  GET: Obter informações do backend
  POST: Criar informações no backend
  PUT: Alterar informações no backend
  DELETE: Deletar informações no backend
*/

/*
  <-- Tipos de Parâmetros -->

  Query Params: Parâmetros nomeados enviados na rota após o '?' (filtros, paginação, ...)
  Route Params: Parâmetros utilizados para identificar recursos
  Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*/

/*
  <-- Databases -->

  Drivers: SELECT * FROM users
  Query Builders: table('users')->select('*').where()
*/
