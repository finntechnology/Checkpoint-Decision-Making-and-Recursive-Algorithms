function leapYear(year) {
  if (year % 4 === 0) {
    // Divisible by 4
    if (year % 100 === 0) {
      // Divisible by 100
      switch (true) {
        case year % 400 === 0:
          return true; // Divisible by 400
        default:
          return false; // Not a leap year
      }
    } else {
      return true; // Not divisible by 100 (leap year)
    }
  } else {
    return false; // Not divisible by 4 (not a leap year)
  }
}

// Example usage
const testYear1 = 2000;
const testYear2 = 2010;
const testYear3 = 2024;

console.log(`${testYear1} is a leap year: ${leapYear(testYear1)}`);
console.log(`${testYear2} is a leap year: ${leapYear(testYear2)}`);
console.log(`${testYear3} is a leap year: ${leapYear(testYear3)}`);

function palindrome(str) {
  // Clean the string: remove spaces, punctuation, and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Base case: If the cleaned string has 0 or 1 character, it's a palindrome
  if (cleanStr.length <= 1) {
    return true;
  }

  // Compare the first and last characters using a switch statement
  switch (cleanStr[0]) {
    case cleanStr[cleanStr.length - 1]:
      // Recurse with the substring excluding the first and last characters
      return palindrome(cleanStr.slice(1, -1));
    default:
      return false; // Not a palindrome
  }
}

// Example usage
const testString1 = "A man, a plan, a canal, Panama!";
const testString2 = "racecar";
console.log(`"${testString1}" is a palindrome: ${palindrome(testString1)}`);
console.log(`"${testString2}" is a palindrome: ${palindrome(testString2)}`);
