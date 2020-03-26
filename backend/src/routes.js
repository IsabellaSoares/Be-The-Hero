const express = require('express');
const routes = express.Router();

routes.get('/users/:id', (request, response) => {
	const routeParams = request.params;
	console.log('Route params >> ', routeParams);

	const queryParams = request.query;
	console.log('Query params >> ', queryParams);

	return response.json({
		evento: 'Semana OmniStack 11.0',
		aluno: 'Isabella Soares'
	});
});

routes.post('/users', (request, response) => {
	const requestBody = request.body;
	console.log('Request body >> ', requestBody);

	return response.json({
		evento: 'Semana OmniStack 11.0',
		aluno: 'Isabella Soares'
	});
});

module.exports = routes;
