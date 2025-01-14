let num = [1,2,3,4,5,6];
console.log("Array : ",num);

// push() :- add element at the end
num.push(7);
console.log("push(7) : ",num);

// pop() :- remove element from the end
num.pop();
console.log("pop() : ",num);

// toString() :- convert heroes into String
num.toString();
console.log("toString() : ",typeof num);

// concat() :- joins multiple arrays & returns result
heroes = ["batman","ironman"];
newArray = num.concat(heroes);
console.log("concate() : ",newArray);

// unshift() :- add element at the start
heroes.unshift("Superman");
console.log("unshift() :", heroes);

// shift() :- remove element from the start
num.shift();
console.log("shift() :", num);

// slice() :- returns a piece of array
console.log("slice() : ",heroes.slice(1,3));

// Note :- Important Function
// splice() :- change original array (add, remove, replace)
// eg : splice(index, remove, add)
heroes.splice(1,0,"Thor");
console.log("splice() : ",heroes);