const express = require('express');

const app = express();

app.get('/res', (req, res) => {

  const Undertale = [
    'Crash',
    'Subiu'
  ];

  let Undyne = Math.floor(Math.random() * Undertale.length)
  let Papyrus = Undertale[Undyne]


  res.json({ data: Papyrus });
});

const Frisk = 3000;
app.listen(Frisk, () => {
  console.log(`Servidor iniciado na porta ${Frisk}`);
});