const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({extended: true}));


const parseData = async (template, data) => {
  return new Promise ((success, fail) => {
    fs.readFile(`${__dirname}/views/${template}.html`, 'utf-8', (err, content) => {
      if (err) {
        return fail(err);
      }
      content = content.replace('{{data}}', data);
      return success(content);
    });
  });
};


const getForm = async (req, res) => {
  try {
    let output = await parseData('form', '');
    res.send(output);
  } catch (err) {
    console.log(err);
  }
};

const postAnaliza = async (req, res) => {

  const recenica = req.body.recenica;
  const zborovi = recenica.length; // broj na bukvi

  const zbor = recenica.split(' ').filter((z) => z.length < 5); // broj na zborovi so pomal broj na karkteri od 5
  
  const zbor2 = recenica.split(' ').filter((z) => z.length > 5); // broj na zborovi so pogolem broj na karakteri od 5
  
  const zbor3 = recenica.split(' ').filter((z) => z.length === 5); // broj na zborovi so ednakov broj na karakteri od 5

  const arr = ['a', 'e', 'i', 'o', 'u'];
  // const zborPocnuva = brojNaZborovi.filter((z) => arr.includes(z[0])).length;
  for (let zbor of brojNaZborovi) {
    // console.log(zbor[1]);
    arr.includes(zbor[0]).length;
  }

  try {
    let output = await parseData('form', result);
    res.send(output);
  } catch (err) {
    console.log(err);
  }
};

app.get('form', getForm);
app.post('analiza', postAnaliza);


app.listen(10000, err => {
  if(err) return console.log(err);
  console.log('Server started');
});
















































const recenica = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique quia dolores voluptatibus eius, impedit dicta minus nihil beatae in dasda?';

const zborovi = recenica.length;
const zbor = recenica.split(' ').filter((z) => {
  return z.length < 5;
});

const zbor2 = recenica.split(' ').filter((z) => {
  return z.length > 5;
});

const zbor3 = recenica.split(' ').filter((z) => {
  return z.length === 5;
});

const recenici = recenica.split('.').length;
const brojNaRecenici = recenici.length;
const brojNaZborovi  = recenica.split(' ');//length na kraj


const arr = ['a', 'e', 'i', 'o', 'u'];
const zborPocnuva = brojNaZborovi.filter((z) => arr.includes(z[0])).length;

// for (let zbor of brojNaZborovi) {
//   // console.log(zbor[1]);
//   console.log(arr.includes(zbor[0]));
// }

console.log(zborPocnuva);


// const count = brojNaZborovi.filter(word => /^[aeiou]/i.test(word)).length;

// console.log(brojNaZborovi);
// console.log(count);

// console.log(zborPocnuva);








// // console.log(zborovi);
// // console.log(zbor);
// // console.log(zbor2);
// // console.log(zbor3);
// // console.log(recenici);
// console.log(brojNaRecenici);
// console.log(brojNaZborovi);
// // console.log(zborP5);


