const http = require('http');

const handler = (req, res) => {


  const [_, name] = req.url.split('/ime');
  
  console.log(_, name)

  const ime = name.slice(1)
  
  const even = ime.length % 2 === 0;
  const arr = ['a', 'i', 'e', 'o', 'u'];
  const samooglaski = ime.split('').filter(n => arr.includes(n)).length;
  
  const sooglaski = ime.length - samooglaski

  res.end(`Imeto ima ${ime} karakteri i brojot na karakteri e paren: ${even ? 'da' : 'ne'}, ima: ${samooglaski} samooglaski i ima: ${sooglaski} soglaski`);
};

const server = http.createServer(handler);


server.listen(10000, err => {
  if (err) return console.log(err);
  console.log('Server successfully started.');
});


// ova e drug nacin na definiranje na samoglaski ovaa funkcija e za gore odma pod samooglaski dojde lebedov i mi smeni
  // console.log(samooglaski);
  // let sooglaski = ime.split('').filter((n) => {
  //   return !arr.includes(n);
  // });

// let name = 'martin'
// let arr = ['a', 'i', 'e', 'o', 'u']

// const samooglaski = name.split('').filter((n) => {
//   return arr.includes(n)
// });
// console.log(samooglaski);

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






