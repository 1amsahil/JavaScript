// getAttribute :-

var gElement = document.querySelector("div");
console.log("1.) getAttribute(\"class\") : ",gElement.getAttribute("class"));

var gElement = document.querySelector("div");
console.log("1.2.) getAttribute(\"id\") : ",gElement.getAttribute("id"));

var gElement = document.querySelector("h2");
console.log("1.3.) getAttribute(\"name\") : ",gElement.getAttribute("name"));

// setAttribute :-

var sElement = document.querySelector(".set-content");
sElement.setAttribute("class","set-new-content");

// Inserting

let newHeading = document.createElement("h2");
newHeading.innerText = "Hi, I am at the Top! (using createElement)";

document.querySelector("body").prepend(newHeading); // prepend() :- at the start inside, 
                                                    // append() :- at the end inside
                                                    // before() :- adds before the node (Outside) 
                                                    // after() :- adds after the node (Outside) 


// Delete

para = document.querySelector("p");
para.remove();
