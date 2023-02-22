const studenti = [
  {ime: 'Bojan', prosek: 7.5, grad: 'Skopje'},
  {ime: 'Pero', prosek: 8.3, grad: 'Bitola'},
  {ime: 'Janko', prosek: 6.9, grad: 'Bitola'},
  {ime: 'Vesna', prosek: 9.2, grad: 'Skopje'},
  {ime: 'Elena', prosek: 9.9, grad: 'Kumanovo'},
  {ime: 'Vancho', prosek: 10, grad: 'Tetovo'},
  {ime: 'Elena', prosek: 9.9, grad: 'Ohrid'},
  {ime: 'Ivana', prosek: 6.9, grad: 'Kumanovo'},
  {ime: 'Natasha', prosek: 8.1, grad: 'Skopje'},
  {ime: 'Stanko', prosek: 7.2, grad: 'Strumica'}
];

// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).

let studenti1 = studenti.filter((student) => {
  return (student.grad === 'Skopje' && student.ime.endsWith('a') && student.prosek > 7) 
});

// console.log(studenti1);

// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.


let studenti2 = studenti.filter((student) => {
  return (student.grad !== 'Skopje' && student.prosek > 9);
});

studenti2.sort((a, b) => {
  if (a.prosek < b.prosek) return 1;
  if (a.prosek > b.prosek) return -1;
});

// console.log(studenti2);

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.

// 4. Градови подредени по групна висина на просек.

// let studenti4 = studenti.reduce((prosek, s) => {
//   return (prosek + s.prosek && prosek.grad === 'Skopje');
// }, 0);

// let studenti4 = studenti.filter((student) => {
//   return student.prosek > 1;
// });

let studentiGrad1 = studenti.filter((student) => {
  return(student.grad === 'Skopje');
});

let studentiGrad2 = studenti.filter((student) => {
  return(student.grad === 'Bitola');
});

// let studentiGrad3 = studenti.filter((student) => {
//   return(student.grad === 'Kumanovo');
// });

// let studentiGrad4 = studenti.filter((student) => {
//   return(student.grad === 'Tetovo');
// });

// let studentiGrad5 = studenti.filter((student) => {
//   return(student.grad === 'Strumica');
// });

// let studentiGrad6 = studenti.filter((student) => {
//   return(student.grad === 'Ohrid');
// });

const studentiGrad = studentiGrad1 + studentiGrad2;

for (let i = 0; i < studentiGrad.length; i++) {
  console.log(studentiGrad);
}

studenti.len






// console.log(studentiGrad1 + studentiGrad2 + studentiGrad3 + studentiGrad4 + studentiGrad5 + studentiGrad6);
