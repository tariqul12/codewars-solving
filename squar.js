// let number = 9119;
function squar(number) {
  return Number(
    number
      .toString()
      .split("")
      .map((val) => {
        return Math.pow(val, 2);
      })
      .join("")
  );
}
console.log(squar(9119));
