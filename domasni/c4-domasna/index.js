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
//   let students = await getAllStudent();
//     console.log(students);
//     // додавање
//     await insertStudent({ime: "Pero", prezime: "Perovski", prosek: 9.2, grad: "Bitola"});
//     let students = await getAllStudent();
//     console.log(students); // да го има Pero во листата
//     // модификација
//     await modifyStudent(0, {ime: "Pero", prezime: "Perovski", prosek: 8.1, grad: "Bitola"});
//     let students = await getAllStudent();
//     console.log(students); // да биде сменет просекот на Pero
//     // бришење
//     await deleteStudent(0);
//     let students = await getAllStudent();
//     console.log(students); // Pero да го нема во листата
// })(); 

const fs = require('fs');


// const arr = [];
// const obj = {ime: "Pero", prezime: "Perovski", prosek: 9.2, grad: "Bitola"};
// arr.push(obj);
// let jsonArray = JSON.stringify(arr);
// let writeFile = fs.writeFileSync('data.json', jsonArray);
// console.log(writeFile);

// READ FILE

const allStudent = () => {
  return new Promise((success, fail) => {
    fs.readFile('data.json', 'utf-8', (err, data) =>{
      if(err) return fail(err);
      return success(JSON.parse(data));
    });
  });
};

const getAllStudent = async () => {
  try {
    let readFile2 = await allStudent();
    console.log(readFile2);
  } catch (err) {
    console.log(err)
  };
};

getAllStudent();

// ADD OBJ TO ARRAY

const insertStudent = (data) => {
  return new Promise ((success, fail) => {
    fs.writeFile('data.json', JSON.stringify(data), (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

const student = async (element) => {
  try {
    let studentArr =  await allStudent();
    // console.log(studentArr);
    studentArr.push(element);
    // console.log(newArr);
    await insertStudent(studentArr);
    console.log(studentArr);
  } catch (err) {
    console.log(err);
  }
}

// student({ime: "Pero", prezime: "Perovski", prosek: 9.2, grad: "Bitola"});


const modifyStudent = async (num, data) => {
  try {
    let newSTudent =  await allStudent();
    let newArr = newSTudent.map((s, index) => num === index ? data : s);
    await insertStudent(newArr);
    console.log(newSTudent);
    console.log(newArr);
  } catch (err) {
    console.log(err);
  };
};

// modifyStudent(0, {ime: "Pero", prezime: "Perovski", prosek: 8.1, grad: "Bitola"});

const deleteStudent = async (num) => {
  let newStudent = await allStudent();
  console.log(newStudent);
  let newStudentUp = newStudent.filter((element, index) => index !== num);
  console.log(newStudentUp);
  await insertStudent(newStudentUp)
};

deleteStudent(0);

// const arr = [];
// const obj = {ime: "Pero", prezime: "Perovski", prosek: 9.2, grad: "Bitola"};
// arr.push(obj);

// let data = arr;

// const student = (filename, data) => {
//   return new Promise ((success, fail) => {
//     fs.writeFile(filename, JSON.stringify(data), (err) => {
//       if (err) return fail;
//       return success(data)
//     });
//   });
// };

// const insertStudent = async () => {
//   try {
//    let newStudent = await student('data.json', data); 
//    console.log(newStudent);
//   } catch (err) {
//     console.log(err);
//   }
// };

// insertStudent();

// const modifyStudent = async (broj, podatoci) => {
//   try {
//     let student = await allStudent('data.json');
//     let student1 = student.map((s, index) => broj === index ? podatoci : s);
//     console.log(student1);
//   } catch (err) {
//     console.log(err);
//   }
// }

// modifyStudent(0, 'dsadas');








