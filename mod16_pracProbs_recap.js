// problem-1
var givenMoney = 1000;
var orangePrice = 200;
var applePrice = 300;

var totalCost = orangePrice + applePrice;
var returnMoney = givenMoney - totalCost;

console.log(returnMoney);


// problem-2
var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalMarks = math + biology + chemistry + physics + bangla;
var avg = totalMarks / 5;
avg = avg.toFixed(2);
avg = parseFloat(avg);

console.log(avg);


// problem-3
var line1 = "I am going to be";
var line2 = "an awesome web developer.";

var fullSentence = line1 + ' ' + line2;
console.log(fullSentence);


// problem-4
var num = 119;
var reminder = 119 % 5;

console.log(reminder);