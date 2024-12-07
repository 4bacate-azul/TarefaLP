const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const veiculoRotas = require('./veiculo');

app.use('/veiculo', veiculoRotas);

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html');
});

const hostname = '127.0.0.1';
const port = 8080;

app.listen(port, hostname, () => {
  console.log(`Servidor rodando...`);
});
