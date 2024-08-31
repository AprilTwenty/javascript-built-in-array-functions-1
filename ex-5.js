const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let average = (total,students,) => total + students.score;
  
 return students.reduce(average,0)/students.length;
}
//function average(total,students){
//  return total + students.score;
//}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students));