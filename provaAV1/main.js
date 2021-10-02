import {Veiculo} from './Veiculo.js'
import {chegada , recorde} from './api.js'
import {Piloto} from './Piloto.js'
import {Corrida} from './Corrida.js'
import express from 'express'

// 822 - DESENVOLVIMENTO DE APLICAÇÕES COM BANCO DE DADOS
/*
Lucas Tavares Nogueira - 2017201844
Susy Anne Viana Ramos – 2017102349
Thais Dos Santos Quirino - 2015101089
*/

const app = express()

let t1 = new  Corrida()
t1.largada()

app.get('/', async function(req, res){
  
  res.json(t1.listPodio)
})

app.get('/recordistas', async function(req, res){
  
  res.json(t1.recordistas)
})

app.get('/largada', async function(req, res){
  t1.largada()
  res.json(t1.listPodio)
})

app.get('/buscar/:nome', async function(req, res){
  await t1.buscaRecordistas(req.params.nome)
  res.json(await t1.resultado)
})

app.listen(3000, function(){
  console.log("Servidor rodando na porta 3000...")
})
