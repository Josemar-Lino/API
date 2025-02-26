import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.use(express.json())



app.post('/usuarios', async (req, res) => {

  await prisma.user.create({
    data: {

      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)
})


app.get('/usuarios', async (req, res) => {

  let users = []

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age

      }
    })

  } else {

    const users = await prisma.user.findMany()
  }



  res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {

  await prisma.user.update({
    where: {
      id: req.params.id
    },

    data: {

      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json({ message: 'Usuário deletado com sucesso!', user });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);

    res.status(500).json({ error: "Erro ao deletar usuário. Verifique se o ID está correto." });
  }
});

app.listen(3000)

/*
 1) Tipo  de rota e método HTTP
 2) Endereço 
 usuário: josemars
 Senha do banco de dados 
 T2SJBF6QGODQpCDh
*/