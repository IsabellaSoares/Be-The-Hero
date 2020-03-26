const express = require('express');
const routes = express.Router();
const crypto = require('crypto');

routes.post('/ongs', (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;
  const id = crypto.randomBytes(4).toString('HEX');
	return response.json();
});

module.exports = routes;
