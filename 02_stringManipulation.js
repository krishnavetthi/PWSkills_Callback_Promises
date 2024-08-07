/*
2. String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function "logString" that logs the sentence "The manipulated string is: " along with the manipulated string or the new string to the console.
*/

let sentence = "Hi, I'm Krishna vetthi Boddu";

function manipulateString (str,callback){
    const uppercase = str.toUpperCase();
    return callback(uppercase);
}

function logString(str){
   return  "The manipulated string is:"+str;
}

const manipulate = manipulateString(sentence,logString);
console.log(manipulate)