const vowel = ["a", "e", "i", "o", "u"];
const str = "My Name Is Tariqul Islam";
let count = 0;
// for (let letter of str.toLowerCase()) {
//   if (vowel.includes(letter)) {
//     count++;
//   }
// }
// console.log(count);
let str1 = str.toLowerCase().split("");
str1.map((letter) => {
  console.log(letter);
  if (vowel.includes(letter)) {
    count++;
  }
});
console.log(count);
