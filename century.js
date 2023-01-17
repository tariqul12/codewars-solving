var year = 2001;
var x = Math.ceil(year / 100);
if (year % 100 == 0) {
  console.log(x);
} else {
  console.log(x + 1);
}
