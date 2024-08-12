// Criando um servidor
import { createServer } from "node:http";

const server = createServer((req, res) => {
    let name: String = "Reginaldo Francisco";
    let idade: number = 44;
 
    res.end(`Ola meu nome é ${name} e tenho S{idade} anos`);
});

server.listen(3000, () => {
    console.log('Servidor funcionando em http://localhost:3000');
});


