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

app.get('/form', async (req, res) => {
  
  try {
    let output = await parseData('form', '');
    res.send(output);
  } catch (err) {
    console.log(err);
  }
});

app.post('/analiza', async (req, res) => {

  let text = req.body.text;
  const zborovi = text.split(' '); 
  const recenici = text.split(/[.,?,!]/).length;
  // console.log(recenici);
  const brojPomalOdPet = zborovi.filter((z) => z.length < 5).length;
  const brojPogolemOdPet = zborovi.filter((z) => z.length > 5).length; 
  const brojNaZboroviEdnakvi = zborovi.filter((z) => z.length === 5).length; 
  const samooglaski = ['a', 'e', 'i', 'o', 'u'];
  const zborPocnuva = zborovi.filter((z) => samooglaski.includes(z[0])).length;
  // console.log(zborPocnuva);
 
  const finalnaAnaliza = `Zborovi pomali od zbir na pet karakteri: ${brojPomalOdPet}, zborovi pogolemi od zbir na pet karakteri: ${brojPogolemOdPet}, zborovi cij zbir na karakteri e ednakov na pet: ${brojNaZboroviEdnakvi}, zborovi sto pocnuvaat so samooglaska: ${zborPocnuva} i broj na recenici vo tekstot: ${recenici}`;
  
  try {
    let output = await parseData('analiza', finalnaAnaliza);
    console.log(output)
    res.send(output);
  } catch (err) {
    console.log(err);
  }
});

app.listen(10000, err => {
  if(err) return console.log(err);
  console.log('Server started');
});


// let zborovi = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique quia dolores voluptatibus eius, impedit dicta minus nihil beatae in dasda?'

// let zboroviP = zborovi.split(' ');
// console.log(zboroviP);

// const arr = ['a', 'e', 'i', 'o', 'u'];
// let count = 0;
//   for (let zbor of zboroviP) {
//     // console.log(zbor[1]);
//     arr.includes(zbor[0]);
//     count++;
//   }

// console.log(count);












































// const recenica = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique quia dolores voluptatibus eius, impedit dicta minus nihil beatae in dasda?';

// const zborovi = recenica.length;
// const zbor = recenica.split(' ').filter((z) => {
//   return z.length < 5;
// });

// const zbor2 = recenica.split(' ').filter((z) => {
//   return z.length > 5;
// });

// const zbor3 = recenica.split(' ').filter((z) => {
//   return z.length === 5;
// });

// const recenici = recenica.split('.').length;
// const brojNaRecenici = recenici.length;
// const brojNaZborovi  = recenica.split(' ');//length na kraj


// const arr = ['a', 'e', 'i', 'o', 'u'];
// const zborPocnuva = brojNaZborovi.filter((z) => arr.includes(z[0])).length;

// // for (let zbor of brojNaZborovi) {
// //   // console.log(zbor[1]);
// //   console.log(arr.includes(zbor[0]));
// // }

// console.log(zborPocnuva);


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


