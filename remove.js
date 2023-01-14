var str = "t";
if (str.length >= 2) {
  var split = str.split("");
  console.log(split);
  split.shift();
  console.log(split);
  split.pop();
  console.log(split);
  var join = split.join("");
  console.log(join);
}
