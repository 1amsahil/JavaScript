// Synchronous :- it means the code run in a particular sequence of instructions given in the program.
//                Each instruction waits for the previous instruction to complete its execution. 

// Asynchronous :- Asynchronous code execution allows to execute next instructions immediately 
//                 if current instruction is block due to error.

console.log("1.) Asynchronous Behaviour");
console.log("one");
console.log("two");
console.log("three");

setTimeout( () => {
    console.log("Asynchronous Behaviour (Execute After 4 Seconds)");
},4000);


console.log("four");
console.log("five");

