// import express
const express = require('express')

// importando os controllers
const QuestionController = require('./controllers/QuestionController')
const RoomController= require('./controllers/RoomController')

const route = express.Router()

//({page: 'enter-room'})/({page: 'create-pass'}) está fazendo referencia a parte do EJS(HTML) separado para ser usado em uma só pagina
route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) 
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))
// ({page:}) é uma variável do EJS 

route.get('/room/:room', (req, res) => res.render("room"))

// Formato que o formulário de dentro da modal tem que passar a informação
// o ":" na rota do express indica a recepção de um valor desconhecido ou seja uma VARIÁVEL
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)

// para o route ser usado é necessárop exportá-lo do arquivos route.js e importar quando for necessário em algum outro arquivo
module.exports = route
