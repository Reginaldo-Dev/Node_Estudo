"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criando um servidor
var express_1 = require("express");
var helmet_1 = require("helmet");
//import path from 'path';
var server = (0, express_1.default)();
var port = 3000;
server.use((0, helmet_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
//server.use(express.static(path.join(__dirname. '../public')));
server.get('/', function (req, res) {
    var name = "Reginaldo Francisco";
    var age = 44;
    res.send("Meu nome \u00E9 ".concat(name, " e tenho ").concat(age, " de idade"));
});
//escutando a porta
server.listen(3000, function () {
    console.log("Servidor estar rodando na porta ".concat(port));
});
