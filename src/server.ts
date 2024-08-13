// Criando um servidor
import express from 'express';
import helmet from 'helmet';
import path from 'path';


const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded( { extended:true}));
//server.use(express.static(path.join(__dirname. '../public')));

server.get('/', (req, res) => {
    let name = "Reginaldo Francisco";
    let age = 44;
    res.send(`Meu nome é ${name} e tenho ${age} de idade`)
});

server.listen(3001, () => {
    console.log('Servidor estar rodando na porta 3001');
})

