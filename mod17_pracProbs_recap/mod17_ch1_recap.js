// practice challenge-1

/*
Alia = 95, 
Dalia = 66, 
Salia = 80, 
Malia = 59, 
Lilia = 47, 
Jaliaya = 77 
*/

var marks = 47;

if (marks >= 90) {
    console.log("A+");
}
else if (marks >= 80 && marks < 90) {
    console.log("A");
} 
else if (marks >= 70 && marks < 80) {
    console.log("B");
} 
else if (marks >= 60 && marks < 70) {
    console.log("C");
} 
else if (marks >= 50 && marks < 60) {
    console.log("D");
} 
// else if (marks < 50) {
//     console.log("F");
// }
else {
    console.log("F");
}