const express = require('express')

const app = express()

app.use(express.json()) // Informa ao Express para utilizar o body das requisições em formato json

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

app.get('/users/:id', (request, response) => {
    const routeParams = request.params
    console.log('Route params >> ', routeParams)

    const queryParams = request.query
    console.log('Query params >> ', queryParams)

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Isabella Soares'
    })
})

app.post('/users', (request, response) => {
    const requestBody = request.body
    console.log('Request body >> ', requestBody)
})

app.listen(3333)