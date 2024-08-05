/* 5. Greeting Promise.
You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".
*/

const name = "Krishna";

function greet(str){
    return new Promise((resolve)=>{
        const greetings = `Hello, ${str}!`;
        resolve(greetings);
    });
}

greet(name)
.then((msg)=>{ console.log(msg);
})