// exports express
const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index.ejs"))
route.get('/room', (req, res) => res.render("room.ejs"))
route.get('/create-pass', (req, res) => res.render("create-pass.ejs"))

// para o route ser usado é necessárop exportá-lo do arquivos route.js e importar quando for necessário em algum outro arquivo
module.exports = route