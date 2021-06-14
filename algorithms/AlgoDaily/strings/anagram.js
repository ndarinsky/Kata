/**
 * Anagram: a word, phrase, or name formed by rearranging the letters of another: such as cinema, formed from iceman.
   We are given two strings like "cinema" and "iceman" as inputs. 
   Write a method isAnagram(str1, str2) that will return true or false depending on whether the strings are anagrams of each other

   Constraints

    Length of both the strings <= 100000
    The strings will contain only alphanumeric characters (a-z , A-Z, 0-9)
    The strings can be empty
    Expected time complexity : O(nlogn)
    Expected space complexity : O(n)
 */

function isAnagram(input1, input2) {
    if (input1.length !== input2.length) return false
    
    const result1 = input1.split("").sort().join("")
    const result2 = input2.split("").sort().join("")
    return result1 === result2
}

console.log(isAnagram("army", "mary"))