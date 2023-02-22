// C - create
// R - read
// U - update
// D - delete // forma na aplikacija

const studenti = [
  {ime: 'Bojan', prosek: 7.5, grad: ''},
  {ime: 'Pero', prosek: 8.3, grad: ''},
  {ime: 'Janko', prosek: 6.9, grad: ''},
  {ime: 'Vesna', prosek: 9.2, grad: ''},
  {ime: 'Elena', prosek: 9.9, grad: ''},
  {ime: 'Vancho', prosek: 10, grad: ''},
  {ime: 'Ivana', prosek: 9.9, grad: ''},
  {ime: 'Natasha', prosek: 9.9, grad: ''},
  {ime: 'Stanko', prosek: 9.9, grad: ''},
];

// Domasna
// 1. Site studenti od Skopje cie ime zavrsuva na 'a' i imaat prosek nad 7 podredeni po ime (rastecki)
// 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjacki
// 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek.
// 4. Gradovi podredeni po prupna visina na prosek.
// 5. Vkupen prosek na studenti cie ime zavrsuva na 'a' nasproti site ostanati.

// for (let i = 0; i < studenti.length; i++) {
//   console.log(studenti[i].ime);
// };

// forEach, map, reduce, sort

// foreach gi izminuva site elementi od nizata, ne vrakja nikakov rezultat
studenti.forEach((s) => {
  console.log(s.ime);
});

// izminuva niza za promeni na istata, rezultatot e nova niza
// studenti.map((s) => {
//   return console.log(s.ime);;
// });

// reducira/namaluva/sumira na eden edinstven rezultat
// let ocenki = studenti.reduce((acc, v) => {
//   return acc + v.prosek;
// }, 0);

// console.log(ocenki);

// studenti.sort((a, b) => {
//   if (a.prosek < b.prosek) return 1;
//   if (a.prosek > b.prosek) return -1;
//   return 0;
// });

// console.log(studenti);

// sortira elementi vo nizta spored dadena funkcija za sortiranje
// studenti.sort((a, b) => {
//   if (a.ime.length > b.ime.length) return 1;
//   if (a.ime.length < b.ime.length) return -1;
//   return 0;
// }); // ne raboti

// filter, find funkcii

// vrakja niza od elementi koi odgovaraat na postaveniot ulov
let studentiFilter = studenti.filter((student) => {
  // return (student.ime === 'Pero');
  // return student.ime.endsWith('o');
  return student.prosek < 8;
});

console.log(studentiFilter);


// vrakja element od nizata koj odgovara na postaveniot uslov
let studentFind = studenti.find((student) => {
  return student.ime === 'Pero';
});

console.log(studentFind);

