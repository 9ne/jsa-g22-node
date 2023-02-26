<<<<<<< HEAD
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

studenti1.sort((a, b) => {
  if (a.ime < b.ime) return 1;
  if (a.ime > b.ime) return -1;
  if (a.ime === b.ime) return 0;
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

let studenti3 = studenti.filter((student) => {
  return (student.ime.length < 6);
});

studenti3.sort((a, b) => {
  if (a.prosek < b.prosek) return 1;
  if (a.prosek > b.prosek) return -1;
});

studenti3.slice(0, 3);

// studenti3.reverse();

// for (let i = 4; i < studenti3.length; i++) {
//   console.log(studenti3[i]);
// };

// console.log(studenti3.slice(0, 3));



// 4. Градови подредени по групна висина на просек.


let studentiGradSort = studenti.sort((a, b) => {
  if (a.grad < b.grad) return -1;
  if (a.grad > b.grad) return 1;
  return 0;
});

let studentiGrad1 = studenti.filter((student) => {
  return (student.grad === 'Skopje');
});

let prosekGrad1 = studentiGrad1.reduce((acc, v) => {
  return acc + v.prosek;
}, 0);

// console.log(prosekGrad1);

// console.log(studentiGrad1);

let studentiGrad2 = studenti.filter((student) => {
  return (student.grad === 'Bitola');
});

// console.log(studentiGrad2);

let studentiGrad3 = studenti.filter((student) => {
  return(student.grad === 'Kumanovo');
});

// console.log(studentiGrad3);

let studentiGrad4 = studenti.filter((student) => {
  return(student.grad === 'Tetovo');
});

// console.log(studentiGrad4);

let studentiGrad5 = studenti.filter((student) => {
  return(student.grad === 'Strumica');
});

// console.log(studentiGrad5);

let studentiGrad6 = studenti.filter((student) => {
  return(student.grad === 'Ohrid');
});

// console.log(studentiGrad6);

let mergeArr = studentiGrad1.concat(studentiGrad2.concat(studentiGrad3.concat(studentiGrad4.concat(studentiGrad5.concat(studentiGrad6)))));

// console.log(mergeArr);


// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

let studenti5a = studenti.filter((student) => {
  return student.ime.endsWith('a');
});

// console.log(studenti5);

let prosekA = studenti5a.reduce((acc, v) => {
  return acc + v.prosek;
}, 0);

// console.log(prosekA);

let studenti5b = studenti.filter((student) => {
  return !student.ime.endsWith('a');
});

// console.log(studenti5b);

let prosekB = studenti5b.reduce((acc, v) => {
  return acc + v.prosek;
}, 0);

// console.log(typeof prosekB);
// console.log(Math.round(prosekB));

// let newArrProsek = [prosekA, (Math.round(prosekB))];

// console.log(`Vkupen prosek na studenti sto ime zavrsuva na 'a' e: ${Math.round(prosekA)}, sprema ${Math.round(prosekB)}`);




// ===================================================================================================================

// 4. Градови подредени по групна висина на просек.

let set = [];

for (let i = 0; i < studenti.length; i++) {
  if (!set.includes(studenti[i].grad)) {
    set.push(studenti[i].grad);
  }
};


// let set = new Set(studenti.map(s => s.grad));

// console.log(set);
let res = Array.from(set).map(g => {
  let sbroj = studenti.filter(s => s.grad === g).length; // kolku studenti se od odreden grad
  let svkupno = studenti.reduce((acc, v) => {
    if (v.grad === g) { // dali studentot e od odreden grad
      return acc + v.prosek; // go sobirame prosekot so prosecite na studentite od istiot grad
    }
    return acc; // vrati ja predhodnata sostojba
  }, 0);
  return {
    grad: g,
    prosek: svkupno / sbroj
  };
}).sort((a, b) => {
  if (a.prosek > b.prosek) return -1;
  if (a.prosek < b.prosek) return 1;
  if (a.prosek === b.prosek) return 0;
});

console.log(res);
=======
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

let studenti3 = studenti.filter((student) => {
  return (student.ime.length < 6);
});

studenti3.sort((a, b) => {
  if (a.prosek < b.prosek) return 1;
  if (a.prosek > b.prosek) return -1;
});

studenti3.slice(0, 3);

// studenti3.reverse();

// for (let i = 4; i < studenti3.length; i++) {
//   console.log(studenti3[i]);
// };

// console.log(studenti3.slice(0, 3));



// 4. Градови подредени по групна висина на просек.


let studentiGradSort = studenti.sort((a, b) => {
  if (a.grad < b.grad) return -1;
  if (a.grad > b.grad) return 1;
  return 0;
});

let studentiGrad1 = studenti.filter((student) => {
  return (student.grad === 'Skopje');
});

let prosekGrad1 = studentiGrad1.reduce((acc, v) => {
  return acc + v.prosek;
}, 0);

console.log(prosekGrad1);

// console.log(studentiGrad1);

let studentiGrad2 = studenti.filter((student) => {
  return (student.grad === 'Bitola');
});

// console.log(studentiGrad2);

let studentiGrad3 = studenti.filter((student) => {
  return(student.grad === 'Kumanovo');
});

// console.log(studentiGrad3);

let studentiGrad4 = studenti.filter((student) => {
  return(student.grad === 'Tetovo');
});

// console.log(studentiGrad4);

let studentiGrad5 = studenti.filter((student) => {
  return(student.grad === 'Strumica');
});

// console.log(studentiGrad5);

let studentiGrad6 = studenti.filter((student) => {
  return(student.grad === 'Ohrid');
});

// console.log(studentiGrad6);

let mergeArr = studentiGrad1.concat(studentiGrad2.concat(studentiGrad3.concat(studentiGrad4.concat(studentiGrad5.concat(studentiGrad6)))));

// console.log(mergeArr);


// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

let studenti5a = studenti.filter((student) => {
  return student.ime.endsWith('a');
});

// console.log(studenti5);

let prosekA = studenti5a.reduce((acc, v) => {
  return acc + v.prosek;
}, 0);

// console.log(prosekA);

let studenti5b = studenti.filter((student) => {
  return !student.ime.endsWith('a');
});

// console.log(studenti5b);

let prosekB = studenti5b.reduce((acc, v) => {
  return acc + v.prosek;
}, 0);

// console.log(typeof prosekB);
// console.log(Math.round(prosekB));

// let newArrProsek = [prosekA, (Math.round(prosekB))];

console.log(`Vkupen prosek na studenti sto ime zavrsuva na 'a' e: ${Math.round(prosekA)}, sprema ${Math.round(prosekB)}`);
>>>>>>> f51ef60466925ce569e7edfb50af6d1f0fdd1bbf
