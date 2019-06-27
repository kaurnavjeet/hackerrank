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

// Task

// Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string  is in the set (a,e,i,o,u), then return A.
// If the first character in string  is in the set (b,c,d,f,g), then return B.
// If the first character in string  is in the set (h,j,k,l,m), then return C.
// If the first character in string  is in the set (n,p,q,r,s,t,v,w,x,y,z), then return D.

function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case /[aeiou]+/.test(s[0]):
      letter = "A";
      break;
    case /[bcdfg]+/.test(s[0]):
      letter = "B";
      break;
    case /[hjklm]+/.test(s[0]):
      letter = "C";
      break;
    case /[npqrstvwxyz]+/.test(s[0]):
      letter = "D";
      break;
    default:
      return "No match found";
  }
  return letter;
}

// Task

// Complete the getSecondLargest function in the editor below. It has one parameter: an array, , of  numbers. The function must find and return the second largest number in .

function getSecondLargest(nums) {
  // Complete the function
  let sortedArr = nums.sort(function(a, b) {
    return a - b;
  });
  let unique = [...new Set(sortedArr)];
  return unique[unique.length - 2];
}

// Task

// Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects  in array  that satisfy .

function getCount(objects) {
  let count = 0;

  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      count++;
    }
  }
  return count;
}
