const express = require("express");
const path = require("path"); // Caminho

const app = express();
const port = 6009;

const indexRouter = require("./routers/indexRouter");

app.set("view engine", "ejs"); //Configurar o servidor para trabalhar com o template engine ejs
app.set("views", path.resolve("src", "views")); //Informar ao servidor aonde esta a nossa pasta de views

//app.use(express.urlencoded({extended: false})) // middleware utilizado para tratamento do req.body
//app.use(methodOverride('_method')) // Serve para sobrescrever o method padrao das requisições do navegador (GET)

app.use(express.json()); //Configurar o servidor para que todas as reqisições seja em JSON
app.use(express.static(path.resolve("src", "public"))); //Informar ao servidor a pasta de arquivos estáticos (public)



/* Rotas */

app.use("/", indexRouter)




app.listen(port, () => {
  console.log(`Servidor rodando na port ${port}`);
});
