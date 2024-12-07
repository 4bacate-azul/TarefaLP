const express = require('express');
const rotas = express.Router();

let veiculos = [
  { id: 1, nome: 'Fusca', fabricante: 'Volkswagen', ano: 1975, combustivel: 'Gasolina', cor: 'Azul', preco: 15000 },
  { id: 2, nome: 'Civic', fabricante: 'Honda', ano: 2020, combustivel: 'Gasolina', cor: 'Preto', preco: 90000 },
];

rotas.post('/', (req, res) => {
  const novoVeiculo = req.body;
  novoVeiculo.id = veiculos.length + 1;
  veiculos.push(novoVeiculo);
  res.status(201).json(novoVeiculo);
});

rotas.put('/', (req, res) => {
  const { id, preco } = req.body;
  const veiculo = veiculos.find(v => v.id === parseInt(id));

  if (veiculo) {
    veiculo.preco = preco;
    res.status(200).send('Preço atualizado com sucesso.');
  } else {
    res.status(404).send('Veículo não encontrado.');
  }
});

rotas.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const indice = veiculos.findIndex(v => v.id === id);

  if (indice !== -1) {
    veiculos.splice(indice, 1);
    res.status(202).send(`O veículo de ID ${id} foi excluído com sucesso.`);
  } else {
    res.status(404).send('Veículo não encontrado.');
  }
});

module.exports = rotas;
