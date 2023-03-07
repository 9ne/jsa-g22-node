// Da se odberat dve funkcii koi rabotat so callback. Istite funkcii da gi prepisete da rabotat so promise.


const fs = require('fs');

// WRITE FILE so fs.writeFile
// const writeFile = (filename, data) => { 
//   return new Promise((success, fail) => {
//     fs.writeFile(filename, data, (err) => {
//       if (err) {
//         return fail(err);
//       } else {
//         console.log('New file is created');
//         return success();
//       } 
//     });
//   });
// };

// writeFile('newfile.txt', 'prva-domasna-vtor-cas')
//   .then(() => {
//     console.log('File is created');
//   })
//   .catch(err => {
//     console.log(err);
//   });


// DELETE FILE so fs.unlink

const fileDelete = () => {
  return new Promise ((success, fail) => {
    fs.unlink(`${__dirname}/test/newfile.txt`, (err, data) => {
      if (err) return console.log(fail);
      return success(data);
    });
  });
};

// (async () => {
//   try {
//     let promise = fileDelete();
//     console.log(promise);
//   } catch (err) {
//     console.log(err);
//   };
// });

// fileDelete();

// APPEND FILE so fs.append, za rewrite na contentot od fajlot

const appendFile = (filename, data) => {
  return new Promise ((success, fail) => {
    fs.appendFile(filename, data, (err) => {
      if (err) return console.log(fail);
      return success();
    });
  });
};

(async () => {
  try {
    let promise = await appendFile('newfile.txt', 'new-content2');
    // console.log(promise);
  } catch (err) {
    console.log(err);
  };
})();


// READ FILE so fs.readFile()

const file = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, 'utf-8',  (err, data) => {
      if (err) return fail(err);
      return success(data)
    });
  });
};

const readFile = async () => {
  try {
    let promise = await file('newfile.txt');
    console.log(promise);
  } catch (err) {
    console.log(err);
  };
};

readFile();







