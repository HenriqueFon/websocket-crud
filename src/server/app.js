import express from "express";
import path from "path";
import ejs from 'ejs';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {routes} from "../routes/routes.js";


//variável para manipular o express
const app=express();

app.use(cookieParser());
//extensão para pegar o corpo da requisição
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 

app.use(express.static(path.join(process.cwd(),'public')));//process.cwd pega o diretorio raiz da pasta
app.set('views',path.join(process.cwd(),'public'));//seta o diretório de views
app.engine('html',ejs.renderFile)//se a extensão do arquivo for html, executa ejs.renderFile como callback
app.set('view engine','html');

app.use(routes);



export default app;

