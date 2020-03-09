const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
  "Hung S. Tran"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

// milestone2 'Filter'

// console.log("words that start with A",inventors.filter( str => {
//   return str.toUpperCase().charAt(0) === 'A';
// }));
// console.log("words with the letter n",inventors.filter( str => {
//   return str.toLowerCase().includes('n');
// }));
// console.log("words with two same letters consecutively", inventors.filter( str => {
//   let slow = 0;
//   for(let fast = 1; fast < str.length; fast++) {
//     if(str[slow] === str[fast])
//       return true;
//     slow++;
//   }
// }));
// console.log("odd numbers ",numbers.filter( num => {
//   if(num%2 === 1)
//     return true;
// }));

// console.log("2-digit numbers ",numbers.filter( num => {
//   if(num >= 10 && num < 100)
//     return true;
// }));

// console.log("Prime numbers ",numbers.filter( num => {
//   for(let i = 2; i < num; i++) {
//     if(num%i === 0)
//       return false;
//   }
//   return num > 1;
// }));

//Milestone 3 Map
// console.log("First Name ",inventors.map(str =>
// {
//   let endOfFirstName = str.indexOf(' ');
//   return str.substring(0, endOfFirstName);
// }));
// console.log("Length of Name ",inventors.map(str =>
// {
//   let endOfFirstName = str.indexOf(' ');
//   return str.length-1;
// }));
// console.log("Uppercase Names ",inventors.map(str =>
// {
//   let endOfFirstName = str.indexOf(' ');
//   return str.toUpperCase();
// }));
// console.log("Initials ",inventors.map(str =>
// {
//   let endOfFirstName = str.indexOf(' ');
//   return `${str.charAt(0)}.${str.charAt(endOfFirstName+1)}.`;
// }));
// console.log("Number x 100 ",numbers.map(num =>
// {
//   return num * 100;
// }));

// function powerOfTwo()
// {
//   let arrayOfTwos = [];
//   let curr = 2;
//   for(let i = 2; i < 11; i++) {
//     arrayOfTwos.push(curr);
//     curr = Math.pow(2, i); 
//   }
//   return arrayOfTwos;
// }
// console.log(powerOfTwo());

//Milestone 4 Sort
// function testSort(str, str2) {
//   for(let i=0;i<str.length;i++) {
//     if(str.toUpperCase().charAt(i) < str2.toUpperCase().charAt(i)) {
//       return -1;
//     } else if(str.toUpperCase().charAt(i) > str2.toUpperCase().charAt(i)) {
//       return 1;
//     } else {
//       continue;
//     }
//   }
//   return 0;
// }
// console.log("Sort words Alphabetically ", inventors.sort(testSort));

// function testSortReverse(str, str2) {
//   for(let i=0;i<str.length;i++) {
//     if(str.toUpperCase().charAt(i) < str2.toUpperCase().charAt(i)) {
//       return 1;
//     } else if(str.toUpperCase().charAt(i) > str2.toUpperCase().charAt(i)) {
//       return -1;
//     } else {
//       continue;
//     }
//   }
//   return 0;
// }
// console.log("Sort words in reverse Alphabetical order ",inventors.sort(testSortReverse));


// function testSortShort(str, str2) {
//   if(str.length < str2.length) {
//     return -1;
//   } else if(str.length > str2.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// console.log("Sort words in order of shortest names first",inventors.sort(testSortShort));

// function testSortLong(str, str2) {
//   if(str.length < str2.length) {
//     return 1;
//   } else if(str.length > str2.length) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// console.log("Sort words in order of longest names first",inventors.sort(testSortLong));


//Milestone 5 Reduce
// console.log("Sum of all numbers",numbers.reduce((total, next) => {
//   return total + next;
// })); 

// console.log("Sum of all even numbers",numbers.reduce((total, next) => {
//   if(total % 2 !== 0)
//     total = 0;
//   if(next % 2 !== 0)
//     next = 0;
//   return total + next;
// })); 
// console.log("All firstNames in one ",inventors.reduce((total, next) => {
//   return total.split(" ")[0] + next.split(" ")[0];
// })); 

//Milestone 6
// console.log("Names with y in them ",inventors.some((str) => {
//   return str.includes('y');//no one here has y in there names
// })); 

// console.log("Do all names have 'e' in them? ",inventors.every((str) => {
//   return str.includes('e');
// })); 

// console.log("Does every name have a first name longer than 4 characters? ",inventors.every((str) => {
//   return str.split(' ')[0].length > 4;
// })); 


//Milestone 7
//use filter if you want ALL people with middle name, use find if trying to find the first occurence 
// console.log("Do they have a middle name? ",inventors.filter((str) => {
//   return str.split(' ').length > 2;
// })); 

// console.log("People without middle names ",inventors.filter((str) => {
//   return str.split(' ').length <= 2;
// }));


// console.log("Number divisible by 7 ",numbers.find((num) => {
//   return num % 7 === 0;
// }));

// console.log("Numbers not divisible by 7 ",numbers.filter((num) => {
//   return num % 7 !== 0;
// }));

//Extra: Fibonacci Number. Function returns array of fib numbers. Input is greater than 2
// function fib(num) {
//   if(num === 1)
//     return [1];
//   else if (num === 2)
//     return [1,1];

//   let array = [1, 1];
//   for(let i=2; i<num;i++) {
//     array.push(array[i-1] + array[i-2]);
//   }
//   return array;
// }
// console.log("Fib numbers ", fib(10));
