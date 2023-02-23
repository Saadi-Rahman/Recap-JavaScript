// problem-1
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];

var bananaIndex = fruits.indexOf('Banana');
console.log("index of banana is:", bananaIndex);

fruits[1] = 'Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);