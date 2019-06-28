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

// Task

// Create a Polygon class that has the following properties:

// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.

class Polygon {
  constructor(s) {
    this.side = s;
  }

  perimeter() {
    let val = 0;
    for (let i = 0; i < this.side.length; i++) {
      val += this.side[i];
    }
    return val;
  }
}

// Task

// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {
  return this.w * this.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(s) {
    super(s, s);
  }
}

// Task

// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

// Complete the function in the editor so that it does the following:

// Finds the initial values of  and  by plugging the area and perimeter values into the formula:
// where  is the rectangle's area and  is its perimeter.
// Creates an array consisting of  and  and sorts it in ascending order.
// Returns the sorted array.

function sides(literals, ...expressions) {
  let a = expressions[0];
  let p = expressions[1];

  let s1 = (p + Math.sqrt(p * p - 16 * a)) / 4;
  let s2 = (p - Math.sqrt(p * p - 16 * a)) / 4;

  return [s1, s2].sort();
}

// Task

// Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by .
// If the element is odd, multiply the element by .
// The function must then return the modified array.

function modifyArray(nums) {
  let modified = nums.map(num => (num % 2 ? num * 3 : num * 2));
  return modified;
}

// Task

// Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */

  let re = /^([aeiou]).*\1$/;
  /*
   * Do not remove the return statement
   */
  return re;
}

// Task

// We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .

// Complete the function in the editor so that given  and , it returns the maximum .

function getMaxLessThanK(n, k) {
  if (((k - 1) | k) <= n) {
    return k - 1;
  } else {
    return k - 2;
  }
}
