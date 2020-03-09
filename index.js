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
