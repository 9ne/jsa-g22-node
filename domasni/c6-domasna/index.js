const http = require('http');

const handler = (req, res) => {

  const [_, name] = req.url.split('/ime');

  let ime = name.length - 1;
  let even = ime % 2 === 0;
  let samooglaski = name.split('').filter((n) => {
    return ['a', 'e', 'i', 'o', 'u'].includes(n)
  });
  let sooglaski = name.split('').filter((n) => {
    return !['a', 'e', 'i', 'o', 'u'].includes(n)
  });

  res.end(`Imeto ima ${ime} karakteri i brojot na karakteri e paren: ${even ? 'da' : 'ne'}, ima ${samooglaski.length} samooglaski i ima ${sooglaski.length - 1} soglaski`);
};



const server = http.createServer(handler);

server.listen(10000, err => {
  if (err) return console.log(err);
  console.log('Server successfully started.');
});





let name = 'martin'
let arr = ['a', 'i', 'e', 'o', 'u']

const samooglaski = name.split('').filter((n) => {
  return 
});
console.log(samooglaski);

// const name = 'martin'; 

// const samooglaski = name.split('').filter((n) => {
//   return ['a', 'e', 'i', 'o', 'u'].includes((n));
// });

// const sooglaski = name.split('').filter((n) => {
//   return !['a', 'e', 'i', 'o', 'u'].includes((n));
// });


// console.log(samooglaski.length);
// console.log(sooglaski.length);


// const vowels = str.match(/[aeiou]/gi); 
// const consonants = str.match(/[^aeiou]/gi); 

// console.log(vowels.length);
// console.log(consonants.length);






