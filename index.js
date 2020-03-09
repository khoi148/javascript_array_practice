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
  "Hanna Hammarstrom"
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