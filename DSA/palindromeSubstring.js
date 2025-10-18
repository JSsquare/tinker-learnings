/*
Problem Statement
Given a string s, return the number of palindromic substrings in it.
A palindrome is a string that reads the same backward as forward.
A substring is a contiguous sequence of characters within a string.

Example 1:
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".


Example 2:
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Example 3:
Input:
s = "ababa"
Output: 9
Explanation: Nine palindromic strings: "a", "b", "a", "b", "a", "aba", "bab", "aba", "ababa".
 */

function countSubstrings(s) {
    let count = 0;
    // The helper function expands around the center and counts palindromic substrings. Here the center is defined by the left and right indices. 
    // Expands really means checking if the characters at the left and right indices are equal, and if they are, it means we have found a palindromic substring.
    // Then we move the left index one step to the left and the right index one step to the right, and check again. 
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    // We iterate through each character in the string and treat each character as a center of a potential palindrome.
    for (let i = 0; i < s.length; i++) {
        // For odd-length palindromes, we call the helper function with the same left and right indices.
        expandAroundCenter(i, i);
        // For even-length palindromes, we call the helper function with the left index as i and the right index as i + 1.
        expandAroundCenter(i, i + 1);
    }
    return count;

    // Time Complexity: O(n^2), where n is the length of the string. In the worst case, we might have to expand around each character for the entire length of the string.
    // Space Complexity: O(1), as we are using only a constant amount of extra space.
}
// Example usage:
console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
console.log(countSubstrings("ababa"));// Output:
// 3
// 6
// 9