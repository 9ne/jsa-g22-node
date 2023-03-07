const {read, write} = require('./input-output');
 

const getAllStudents = async () => {
  return await read();
};

const addStudent = async (studentData) => {
  let students = await read();
  students.push(studentData);
  await write(students);
};

const deleteStudent =  async (studentIndex) => {
  let students = await read();
  students = students.filter((s, index) => index !== studentIndex);
  await write(students);
};

const modifyStudent = async (studentIndex, studentData) => {
  let students = await read();
  students = students.map((s, index) => {
    if (index === studentIndex) {
      return {
        ...s,
        ...studentData
      };
    }
    return s;
  });
  await write(students);
};

module.exports = {
  addStudent,
  modifyStudent,
  deleteStudent,
  getAllStudents
}