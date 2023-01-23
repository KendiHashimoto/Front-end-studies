// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;

// For inputString = "abac", the output should be
// solution(inputString) = false;

// For inputString = "a", the output should be
// solution(inputString) = true.

function solution(inputString) {
  const original = inputString
  const reversed = original.split("").reverse().join("")
  if (original === reversed) return true
  else return false
}

console.log(solution("aabaa"))
