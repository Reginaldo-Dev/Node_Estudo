// Criando um servidor
import { createServer } from 'node:http';
import express from 'express';
import helmet from 'helmet';
//import path from 'path';


const server = express();
const port = 1080;

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded( { extended:true}));
//server.use(express.static(path.join(__dirname. '../public')));

server.get('/', (req, res) => {
    let name = "Reginaldo Francisco";
    let age = 44;
    res.send(`Meu nome é ${name} e tenho ${age} de idade`)
});

//escutando a porta
server.listen(1080, () => {
    console.log(`Servidor estar rodando na porta ${port}`);
})

