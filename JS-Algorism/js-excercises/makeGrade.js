'use strict'

/**
 * Write a function called makeGrade(array, array) Where the first array
 * contain student objects, each student object has a name, and an answers array for
 * that student. The second array contains the correct answers. Each correct answer
 * will give 10 points to a student. An Incorrect answer gives zero points, a missing
 * answer gives -5 points. Once the points are added for a student a letter grade
 * should be assigned where 50 points is an "A", 40 or above is a "B”and 30 or above
 * is a "C", 20 or above is a "D", below 20 is an "F". The function should return an
 * array containing objects with the student's name and his/her grade.
 * Examples:
 * let students = [{
 * name: “Jack", answers: ("a", "b", "c". "b", "")),
 * {name: "Lisa",answers: ("b". "b", "b", "b", "WI},
 * {name: "Rita", answers: ("a","b","c", -a", "d")),
 * {name: "Bob". answers: ("c", "0", "b". "a", "b"}];
 * makeGrade(students, ["a", "V, "c", "a", "d”] )
 * // returns [{name: "Jack", grade: "D"}, {name: "Lisa", grade: "F"}, {name:
 * "Rita", grade: "A"}, {name: "Bob", grade: "F"}]
 * makeGrade(students, [“b". "b". "b". "b", "b"])
 * // returns [{name: "Jack", grade: "F"}, {name: "Lisa". grade: "A"},{name:
 * "Rita", grade: "F"}. {name: "Bob", grade: "D"}]
 *
 * @author Solomon G.
 */
function makeGrade(studentObject, correctAnswer) {
    let gradeArray = [];
    let point = 0;
    let grade = ''
    for (let i = 0; i < studentObject.length; i++) {
        for (let j = 0; j < studentObject[i].answers.length; j++) {
            if (studentObject[i].answers[j] === correctAnswer[j]) {
                point = point + 10
            } else if (studentObject[i].answers[j] === "") {
                point = point - 5
            }
        }
        if (point === 50) {
            grade = "A"
        } else if (point >= 40) {
            grade = "B"
        } else if (point >= 30) {
            grade = "C"
        } else {
            grade = "D"
        }
        gradeArray.push({ name: studentObject[i].name, Grade: grade })
    }
    console.log(gradeArray)
}


let answerkey = ["a", "b", "c", "a", "d"];
let students = [
    { name: "Jack", answers: ["a", "b", "c", "b", ""] },
    { name: "Lisa", answers: ["b", "b", "b", "b", "b"] },
    { name: "Rita", answers: ["a", "b", "c", "a", "d"] },
    { name: "Bob", answers: ["c", "0", "b", "a", "b"] },
];

makeGrade(students, answerkey);