# 🚀 API de Usuários com Node.js, Express e Prisma

Uma API simples para cadastro, listagem, atualização e remoção de usuários, utilizando **Node.js**, **Express** e **Prisma ORM** com **MongoDB**.

## 📌 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/) (Para testar as requisições)

---

## 📦 Instalação e Configuração

### **1️⃣ Clone o repositório**
```sh
git clone https://github.com/Josemar-Lino/API.git
cd API

2️⃣ Instale as dependências

npm install

3️⃣ Configure o Banco de Dados

Crie um arquivo .env na raiz do projeto e adicione sua conexão com o MongoDB:
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/Users"

4️⃣ Gere os arquivos do Prisma

npx prisma generate

▶️ Executando a API

Para iniciar o servidor, use:
npm start

A API estará disponível em http://localhost:3000 🚀

🔥 Rotas Disponíveis

📌 Criar um Usuário
Método: POST
Endpoint: /usuarios
Body (JSON):
json
Copiar
Editar
{
  "email": "exemplo@email.com",
  "name": "Usuário Teste",
  "age": 30
}
Resposta:
json
Copiar
Editar
{
  "id": "123456",
  "email": "exemplo@email.com",
  "name": "Usuário Teste",
  "age": 30
}

📌 Listar Todos os Usuários
Método: GET
Endpoint: /usuarios
Resposta:
json
Copiar
Editar
[
  {
    "id": "123456",
    "email": "exemplo@email.com",
    "name": "Usuário Teste",
    "age": 30
  }
]

📌 Buscar Usuários por Filtro
Método: GET
Endpoint: /usuarios?name=Josemar
Resposta (caso encontre usuários):
json
Copiar
Editar
[
  {
    "id": "123456",
    "email": "josemar@email.com",
    "name": "Josemar",
    "age": 37
  }
]
Se o nome não existir, retorna um array vazio:
json
Copiar
Editar
[]

📌 Atualizar um Usuário
Método: PUT
Endpoint: /usuarios/:id
Body (JSON):
json
Copiar
Editar
{
  "email": "novoemail@email.com",
  "name": "Novo Nome",
  "age": 35
}
Resposta:
json
Copiar
Editar
{
  "id": "123456",
  "email": "novoemail@email.com",
  "name": "Novo Nome",
  "age": 35
}
📌 Deletar um Usuário
Método: DELETE
Endpoint: /usuarios/:id
Resposta:
json
Copiar
Editar
{
  "message": "Usuário deletado com sucesso!"
}


📝 Melhorias Futuras
🔒 Adicionar autenticação com JWT
📊 Implementar testes automatizados
🌐 Criar um frontend para consumir a API

📄 Licença
Este projeto está sob a licença MIT.
Sinta-se à vontade para usar e contribuir! 🚀

Feito com ❤️ por Josemar Lino
🔗 LinkedIn | 🐙 GitHub