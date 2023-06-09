const express = require('express');
const app = express();
const port = 3000;

app.get('/numbers', (req, res) => {
  const numbers = [1, 2, 3, 4, 5];
  res.send(numbers);
});

app.post('/numbers', (req, res) => {
  const number = req.body.number;
  if (!number) {
    res.status(400).send('Invalid request');
  } else {
    const numbers = [1, 2, 3, 4, 5];
    numbers.push(number);
    res.send(numbers);
  }
});

app.delete('/numbers/:number', (req, res) => {
  const number = req.params.number;
  const numbers = [1, 2, 3, 4, 5];
  const index = numbers.indexOf(number);
  if (index === -1) {
    res.status(404).send('Number not found');
  } else {
    numbers.splice(index, 1);
    res.send(numbers);
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});