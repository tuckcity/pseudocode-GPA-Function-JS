/* 
===PSEUDOCODE PRACTICE===

function calculate_gpa
  pass in student_grades
  set grade_total to 0
  for each grade in student_grades
      if grade is not a 1, 2, 3, or 4
          print "invalid grade"
          print grade
          exit function with "can't complete calculation" message
      else add grade to grade_total
      endif
   endfor
   set gpa to grade_total / number of grades
   return gpa
endfunction

set reggie_grades to 4, 4, 3, 4
print the results of calling calculate_gpa with reggie_grades

set dave_grades to 1, 2, 3, 2
print the results of calling calculate_gpa with dave_grades
*/

const reggieGrades = [4, 4, 3, 4];
const daveGrades = [1, 2, 3, 2];
const failGrades = [0, 1, 3, 6];
const moreGrades = [2, 3, 4, 4, 1, 2, 3, 4];


function calculateGPA(studentGrades) {
    let gradeTotal = 0;
    let numOfGrades = studentGrades.length;
    for (let i = 0; i < numOfGrades; i++) {
        let grade = studentGrades[i];
        if (grade < 1 || grade > 4) {
            console.log(`Invalid grade: ${grade}.`)
            return `Cannot complete calculation!`
        } else {
            gradeTotal += studentGrades[i];
        }
    }
    gpa = gradeTotal / numOfGrades;
    return gpa;
}
