// Map :- Create a new array with the results of some operation.
let num = [4,5,6,7,8];
var mul = num.map( (value) => {
    return value*2;
} )

console.log("Map Method \nNumber :",num," Multiple by 2 :",mul);

// Filter :- Create a new array of elements that give true for a condition.
var mod = num.filter( (val) =>{
    return (val%2==0);
} )

console.log("Filter Method \nNumber :",num," Multiple of 2 :",mod);

// Reduce :- Performs some operations & reduces the array to a single value. it returns that single value.
var sum = num.reduce((res,curr) => {
    return res+curr;
})

console.log("Reduce Method \nNumber :",num," Sum of All Numbers :",sum);

// Another eg of reduce :-
num = [5,7,2,9,4];

var max = num.reduce((prev, curr) => {
if(prev<curr)
    {
        prev = curr;
    }
    return prev;
})

console.log("Reduce Method \nNumber :",num," Maximum Number :",max);