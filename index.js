const express = require('express');

const app = express();

app.get('/data', (req, res) => {
  const data = new Date();

  const dias = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ];

  
  const dia = dias[data.getDay()];

  const dataFormatada = `${dia}`;

  res.json({ data: dataFormatada });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
