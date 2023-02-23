// problem-2

/**
 *  80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less => F grade
 */

// myScore = 85;
// tomScore = 66;
// janeScore = 95;
// peterScore = 56;
// johnScore = 39;

var score = 39;

if (score >= 80) {
    console.log("A");
}
else if (score >= 60 && score < 80) {
    console.log("B");
}
else if (score >= 50 && score < 60) {
    console.log("C");
}
else if (score >= 40 && score < 50) {
    console.log("D");
}
else {
    console.log("F");
}