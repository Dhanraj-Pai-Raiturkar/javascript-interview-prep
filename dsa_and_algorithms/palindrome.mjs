function palindrome(str) {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

function palindromeRecursive(str) {
  str = str.toLowerCase();
  function checkPalindrome(left, right) {
    if (left >= right) return true;
    if (str[left] !== str[right]) return false;
    return checkPalindrome(left + 1, right - 1);
  }
  return checkPalindrome(0, str.length - 1);
}

console.log("palindrome", palindrome("madaM"));
console.log("palindromeRecursive", palindromeRecursive("madaM"));
