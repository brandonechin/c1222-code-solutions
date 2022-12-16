/* exported getStudentNames */
function getStudentNames(students) {
  var newArray = [];
  for (let i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
}
