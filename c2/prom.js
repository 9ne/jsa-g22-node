const fs = require('fs'); // filestystem paket / modul

// fs.writeFile(
//   'data.txt', // fajlot kade ke se zapise
//   'Hello World... Node', // sto ke bide zapisano vo fajlot
//   (err) => { // funkcijata koja ke se izvrsi otkako ke zavrsi zapisot
//     if(err) return console.log(err);
//     console.log('Zapisot e napraven');
// });

fs.writeFile('data.txt',  'Hello World... Node', (err) => {
    if(err) return console.log(err);
    console.log('Zapisot e napraven');
});

// PROMISE

// cekor 1
// const fileWrite = () => {

// };

// cekor 2
// const fileWrite = () => {
//   return new Promise();
// };

//  cekor 3
// const fileWrite = () => {
//   return new Promise(() => {

//   });
// };


// cekor 4
// const fileWrite = () => {
//   return new Promise((success, fail) => {
    
//   });
// };

// cekor 5
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile('data.txt',  'Hello World... Node', (err) => {
//       if(err) return console.log(err);
//       console.log('Zapisot e napraven');
//     });   
//   });
// };

// cekor 6
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile('data.txt',  'Hello World... Node', (err) => {
//       if(err) return console.log(fail);
//       return success();
//     });   
//   });
// };

// cekor 7
const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename,  data, (err) => {
      if(err) return console.log(fail);
      return success();
    });   
  });
};

fileWrite('data1.txt', 'Nov fajl so zapis od promise!')
  .then(()=>{
    console.log('Zapisot e uspesen! (vo noviot fajl');
  })
  .catch(err => {
    console.log(err);
  });

(async () => {
  try {
    await fileWrite('data1.txt', 'Nov fajl so zapis od promise!');
  } catch (err) {
    console.log(err);
  }
})();
