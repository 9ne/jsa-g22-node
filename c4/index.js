// student [ime, prezime, prosek, grad]
// CRUD
// додавање на студент во фајлот
// бришење на студент од фајлот
// менување на податоци на студент од фајлот
// читање на сите студенти од фајлот

// - треба да додадеме студент во фајлот
// 1. да ја вчитате целата содржина од фајлот | fs.readFile
// 2. да ја конвертирате содржината од обичен текст во js низа / објект | JSON.parse
// 3. треба да ги додадете податоците на студентот во низата | Array.push
// 4. низата од js низа / објект треба да биде конвертирана во текст | JSON.stringify
// 5. текстот треба да биде зачуван во фајлот | fs.writeFile

// - Името на студентот треба да биде сменето од ААА во ААБ
// 1. да ја вчитате целата содржина од фајлот | fs.readFile
// 2. да ја конвертирате содржината од обичен текст во js низа/објект | JSON.parse
// 3. да ги измините сите елементи во низата и да направите промена само на соодветниот член | Array.map
// 4. низата од js низа/објект треба да биде конвертирана во текст | JSON.stringify
// 5. текстот треба да биде зачуван во фајлот | fs.writeFile

// - треба да се избрише студент од фајлот
// 1. да ја вчитате целата содржина од фајлот | fs.readFile
// 2. да ја конвертирате содржината од обичен текст во js низа / објект | JSON.parse
// 3. да ги измините сите елементи во низата и да го избришете само соодветниот член | Array.filter
// 4. низата од js низа / објект треба да биде конвертирана во текст | JSON.stringify
// 5. текстот треба да биде зачуван во фајлот | fs.writeFile




// (async () => {
//   let student1 = await getAllStudent();
//     console.log(student1);
//     // додавање
//     await insertStudent({ime: "Pero", prezime: "Perovski", prosek: 9.2, grad: "Bitola"});
//     let student2 = await getAllStudent();
//     console.log(student2); // да го има Pero во листата
//     // модификација
//     await modifyStudent(0, {ime: "Pero", prezime: "Perovski", prosek: 8.1, grad: "Bitola"});
//     let student3 = await getAllStudent();
//     console.log(student3); // да биде сменет просекот на Pero
//     // бришење
//     await deleteStudent(0);
//     let student4 = await getAllStudent();
//     console.log(student4); // Pero да го нема во листата
// })(); 




const fs = require('fs');

const newArr = [];
const obj = {ime: "Pero", prezime: "Perovski", prosek: 9.2, grad: "Bitola"};

const newArrPushed = newArr.push(obj);

let jsonArray = JSON.stringify(newArr);
fs.writeFileSync('data.json', jsonArray);


let jsonData = fs.readFileSync('data.json', 'utf-8');
let jsonParsedData = JSON.parse(jsonData);
let changeData = jsonParsedData.map((data) => {return data.ime = 'Alex'});
  
let dataModified = fs.writeFileSync('data.json', JSON.stringify(jsonParsedData));

let dataDelete = fs.readFileSync('data.json', 'utf-8');
let parsedDataDelete = JSON.parse(dataDelete);
let dataDeleted = parsedDataDelete.filter((data) => {
  return data.ime !== 'Alex';
});

let dataDeletedParsed = fs.writeFileSync('data.json', JSON.stringify(dataDeleted));

// (async () => {
//   let student1 = await getAllStudent(newArr);
//     console.log(student1);
//     await insertStudent({ime: "Pero", prezime: "Perovski", prosek: 9.2, grad: "Bitola"});
//     let student2 = await getAllStudent();
//     console.log(student2); 
//     await modifyStudent(0, {ime: "Pero", prezime: "Perovski", prosek: 8.1, grad: "Bitola"});
//     let student3 = await getAllStudent();
//     console.log(student3); 
//     await deleteStudent(0);
//     let student4 = await getAllStudent();
//     console.log(student4);
// })();



















// const json = students;
// const obj = JSON.parse(json);

// console.log(obj);
// (async () => {
//   let students = await getAllStudent(students);
//   console.log(students);
// })();
