const express = require('express');

const app = express();

const path = require('path');

const router = express.Router();

router.get('/', function(req,res){

    res.sendFile(path.join(__dirname+'/index.html'));

});

router.get('/sobre', function(req,res){

    res.sendFile(path.join(__dirname+'/about.html'));

});

app.use('/',router);
//use standard port or port 3000
app.listen(process.env.port || 3000);

console.log("Server rodando");


/*

Creating only the server (without html) 

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Olá Mundo');
    
});

server.listen(port,hostname, () => {
    console.log("servidor rodando!");
})
*/