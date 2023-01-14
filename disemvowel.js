function disemvowel(str) {
  //   const vowel = "aeiou";
  const vowel = ["a", "e", "i", "o", "u"];
  var newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i].toLowerCase())) continue;
    console.log(str[i]);
    newStr += str[i];
  }
  return newStr;
}
console.log(disemvowel("This website is for losers LOL!"));
