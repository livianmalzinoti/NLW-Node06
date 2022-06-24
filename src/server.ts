import express, { request, response } from "express";

// @types/express
const app = express();

/**
 * GET    => Quando quiser buscar uma informação : Buscar
 * POST   => Quando quiser inserir uma informação : Inserir
 * PUT    => Quando quiser Alterar uma informação : Alterar
 * DELETE => Quando quiser remover uma informação: Deletar
 * PATCH  => Quando quiser alterar uma informação especifica : Alteração especifica
 */

app.get("/test", (request, response) => {
  //Request = Entrando
  //Response= Saindo
  return response.send("olá nlw")
});

app.post("/test-post",(request,response)=>{
    return response.send("Olá método post")
});

//http://localhost:3000
app.listen(3000, () => console.log("Servidor Ativo 🚀"));
