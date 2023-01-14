var arr = [1, 2, 2];
var sum = 0;
arr.map((value) => {
  sum += Math.pow(value, 2);
});
console.log(sum);
