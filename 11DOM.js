// Window Object :- window object represents an open window in a browser. 
//                  it is browser's object & is automatically created by browser.
//                  it is global object with lots of properties & methods.

// DOM :- Document Object Model

// Selecting

// getElementBy
console.log("getElementBy :-");

// getElementBy using ID :
var heading = document.getElementById("heading");
console.log(heading);

// getElementBy using Class
var content = document.getElementsByClassName("content");
console.log(content);

// getElementBy using Tag
var button = document.getElementsByTagName("button");
console.log(button);


// querySelector
console.log("querySelector :- ");

var heading = document.querySelector("#heading");
console.log("Id :",heading);

var content = document.querySelector(".content");
console.log("Class :",content);

var button = document.querySelector("button");
console.log("TagName :",button);
