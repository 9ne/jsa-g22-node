// Da se odberat dve funkcii koi rabotat so callback. Istite funkcii da gi prepisete da rabotat so promise.


const fs = require('fs');
const path = require('path');


const writeFile = (filename, data) => { 
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, (err) => {
      if (err) {
        return fail(err);
      } else {
        console.log('New file is created');
        return success();
      } 
    });
  });
};

writeFile('newfile.txt', 'prva-domasna-vtor-cas')
  .then(() => {
    console.log('File is created');
  })
  .catch(err => {
    console.log(err);
  });

  fs.unlink(`${__dirname}/test/newfile.txt`, (err) => {
    console.log();
    if (err) throw err;
    console.log('successfully deleted newfile.txt'); // brisenje na fajl vnatre vo test, predhodno kreiran
  });




