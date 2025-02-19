//Impotacao do express


//const express = require('express')

import express from "express";

//croa o objeto app que tem todas funções do express
const app = express()

// Criando rota GET no endereço raiz (localhost:3000)
app.get('/', (req, res) => {
    return res.json({message: "Chamado a rota GET!"
       
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


app.delete('/user', (req, res) => {
    return res.json({
        message:"Chamado a rota Delete no Endpoint /user"
    })
})


// Sobe o servidor e fica ouvindo as rotas criadas anteriormente
app.listen(3000, () => {
    console.log('Servidor Rodando no http://localhost:3000.')
})