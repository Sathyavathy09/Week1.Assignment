/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

const { log } = require("console");


let s = "Hello World";
const words = s.split(" ");
let lastWord = words[words.length-1];
console.log("The last word is " +lastWord+  " with length " +lastWord.length);

let s1 = "   fly me   to   the moon  ";
const words1 = s1.trim().replace(/  /g,'').split(" ");
lastWord1 = words1[words1.length-1];
console.log("The last word is " +lastWord1+  " with length " +lastWord1.length);



function isPalindrome(str2)
{
    let charrs = str2.split(""); 
    var revstr2 = "";
    for (let i =charrs.length-1; i>=0; i--)
    {
       
        revstr2 = revstr2 + charrs[i];
    
    }

if(str2==revstr2)
{
    return true;
}
else return false;
}
let str = "malayalam";
console.log(isPalindrome(str));



function isAnagram(str3,str4)
{
if(sorting(str3)==sorting(str4))
return true;
else
return false;
}


function sorting(str)
{
    return str.split("").sort().join("");
}

let str3 = "silent";
let str4 = "listen";
console.log(isAnagram(str3,str4));