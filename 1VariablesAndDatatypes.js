// Varaibles in JS - 

// // var :- can be redeclared & updated. A global scope varible.
var x = 10;
var x = "change";

// // let :- cannot be redecalred but can be updated. A block scope varible.
let y = 20;
y = "change";

// // const :- cannot be redeclared & updated. A block scope variable.
const z = 30;

// DataTypes in JS

// // Primitive Datatypes :- Number, String, Boolean, Undefined, Null, BigInt, Symbol
console.log("Primitive DataTypes :- ");

number = 34;
console.log("1.) Number : "+number);

fullName = "Mohd Sahil"
console.log("2.) String : "+fullName);

check = true;
console.log("3.) Boolean : "+check);

var value;
console.log("4.) Undefined : "+value);

value = null
console.log("5.) Null : "+value);

num = BigInt(123)
console.log("6.) BigInt : "+num);

sym = Symbol("Hello !")
console.log("7.) Symbol :",sym)


// // Non-Primitive Dataypes :- Object, Array
console.log("Non-Primitive DataTypes :- ");

/*
Example :-

Object = {
    key : value,
    key : value,
    key : value
    };
    
    object.key;
    object["key"];
    
    // note :- we can update const object {key}'s {value} just like below
    
    */
console.log("1.) Object :- ");
   
const student = {
       name : "sahil",
       age : 24,
    cgpa : 7.5
};

console.log(student);

// console.log("Name : "+student.name);
// console.log("Age : "+student["age"]);

// student.cgpa = 7.8;
// console.log("CGPA : "+student["cgpa"]);