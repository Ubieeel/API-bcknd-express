//Impotacao do express



//const express = require('express')

import express from "express";

import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

//croa o objeto app que tem todas funções do express
const app = express()

// Criando rota GET no endereço raiz (localhost:3000)
app.get('/', (req, res) => {
    return res.json({message: "Bem vindo a API!"
       
    })
})

app.post('/', (req, res) => {
    return res.json({message: "Chamado a rota POST!"
       
    })
})

app.put('/', (req, res) => {
    return res.json({message: "Chamado a rota POST!"
       
    })
})


app.use('/user', userRouter)
app.use('/product', productRouter)


// Sobe o servidor e fica ouvindo as rotas criadas anteriormente
app.listen(3000, () => {
    console.log('Servidor Rodando no http://localhost:3000.')
})