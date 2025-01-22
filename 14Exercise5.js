// Create a Button using JS only

var button = document.createElement("button");
button.innerText = "click me";

button.style.backgroundColor = "dodgerblue"
button.style.color = "white";
button.style.border = "3px solid green";

button.setAttribute("class","btn");

document.querySelector("body").prepend(button);


// Append a new CSS class using JS only

var newClass = document.querySelector(".para");
newClass.setAttribute("class","new-Para");