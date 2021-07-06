// import express
const express = require('express')

// importando os controllers
const QuestionController = require('./controllers/QuestionController')

const route = express.Router()

route.get('/', (req, res) => res.render("index.ejs"))
route.get('/room', (req, res) => res.render("room.ejs"))
route.get('/create-pass', (req, res) => res.render("create-pass.ejs"))

// Formato que o formulário de dentro da modal tem que passar a informação
// o ":" na rota do express indica a recepção de um valor desconhecido ou seja uma VARIÁVEL
route.post('/room/:room/:question/:action', QuestionController.index)

// para o route ser usado é necessárop exportá-lo do arquivos route.js e importar quando for necessário em algum outro arquivo
module.exports = route
