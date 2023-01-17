var arr = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
var number = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] != false) {
//     number++;
//   }
// }
arr.map((value) => {
  if (value == true) {
    number++;
  }
});
console.log(number);
