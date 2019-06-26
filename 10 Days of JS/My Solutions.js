// Task

// Declare a constant variable, , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
// Read a number, , denoting the radius of a circle from stdin.
// Use  and  to calculate the  and  of a circle having radius .
// Print  as the first line of output and print  as the second line of output.

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  let input = readLine();
  const PI = Math.PI;

  // Print the area of the circle:
  console.log(input ** 2 * PI);
  // Print the perimeter of the circle:
  console.log(input * 2 * PI);
}

// Task

// Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

function vowelsAndConsonants(s) {
  let vowels = "";
  let consonants = "";
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      vowels += s[i];
    } else {
      consonants += s[i];
    }
  }
  for (let i = 0; i < vowels.length; i++) {
    debugger;
    console.log(vowels[i]);
  }

  for (let i = 0; i < consonants.length; i++) {
    console.log(consonants[i]);
  }
}
