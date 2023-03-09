const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/ime/:name', (req, res) => {

  const name = req.params.name;
  console.log(name);
  
  const even = name % 2 === 0;
  const ime = name.slice(1);

  const arr = ['a', 'i', 'e', 'o', 'u']
  const samooglaski = ime.split('').filter((n) => arr.includes(n));
  const sooglaski = ime.split('').filter((n) => !arr.includes(n));

  res.send(`Imeto ima ${name.length} karakteri i brojot na karakteri e paren: ${even ? 'da' : 'ne'}, ima: ${samooglaski.length} samooglaski i ima: ${sooglaski.length} soglaski`);

});

app.post('/ime', (req, res) => {

  const name = req.body.name;
  // console.log(name);
  
  const even = name % 2 === 0;
  const ime = name.slice(1);

  const arr = ['a', 'i', 'e', 'o', 'u']
  const samooglaski = ime.split('').filter((n) => arr.includes(n));
  const sooglaski = ime.split('').filter((n) => !arr.includes(n));

  res.send(`Imeto ima ${name.length} karakteri i brojot na karakteri e paren: ${even ? 'da' : 'ne'}, ima: ${samooglaski.length} samooglaski i ima: ${sooglaski.length} soglaski`);

});

app.listen(10000, err => {
  if (err) return console.log(err);
  console.log('Server started succesfully on port 10000');
});