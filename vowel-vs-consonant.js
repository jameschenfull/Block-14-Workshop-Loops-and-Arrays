//Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.
function countCnV(str) {
  let consonants = 0;
  let vowels = 0;
}

for (let i = 0; i < str.length; i++) {
  const letter = str[i];

  if ((letter === "a", "e", "i", "o", "u")) {
    vowels++;
  } else {
    consonants++;
  }
  console.log("${str} has ${consonants} consonants and ${vowels} vowels");
}

//Input Arrays	Expected Results
//"hello"
//"hello has 3 consonants and 2 vowels"
//"ukelele"
//"ukelele has 3 consonants and 4 vowels"
//"awesome"	"awesome has 3 consonants and 4 vowels"
//"onomonopia"	"onomonopia has 4 consonants and 6 vowels"
//"textbook"	"textbook has 5 consonants and 3 vowels"
