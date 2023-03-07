const {addStudent, modifyStudent, deleteStudent, getAllStudents} = require ('./students');

(async () => {
  try {
    await addStudent({
      ime: 'Pero',
      prezime: 'Perovski',
      godina: 2000
    });

    let students = await getAllStudents();
    console.log(students);

    await modifyStudent(0, {
      ime: 'Jovan',
      prosek: 8.2
    });

    await deleteStudent(0);

    students = await getAllStudents();
    console.log(students);
    
  } catch (err) {
    console.log('Erorr', err);
  } finally {
    console.log('End of code!');
  }
})();


