/*
1. Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.
*/

let integers = [1,2,3,4,5,6,7,8];
let newInt = [];
integers.map(e=>(newInt.push(e*2)));
console.log(newInt)

function doubleArray(arr,callback){
    const doubleArr = arr.map((num)=>{
        return callback(num); });
    return doubleArr;
}

function callback(num){
    return num * 2;
}

const doubleInt = doubleArray(integers,callback);

console.log(doubleInt);


