const fs = require('fs');

const read = async () => {
  return new Promise((success, fail) => {
    fs.readFile('data.json', 'utf-8', (err, data) => {
      if(err) return fail(err);
      data = JSON.parse(data);
      return success(data);
    });
  });
};

const write = async (data) => {
  return new Promise((success, fail) => {
    data = JSON.stringify(data);
    fs.writeFile('data.json', 'utf-8', err => {
      if(err) return fail(err);
      return success();
    });
  });
};

module.exports = {
  read,
  write
};