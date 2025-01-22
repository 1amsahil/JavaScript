let btn = document.querySelector(".btn");

// Events

btn.onclick = () =>{
    console.log("Even-1")
}

btn.onclick = () =>{
    console.log("Event-2")
}
// Note :- Event can not perform same function again, it overrides 


// Event Listener

btn.addEventListener ( "click",() => {
    console.log("Event Listener-1");
});

btn.addEventListener ( "click",() => {
    console.log("Event Listener-2");
});


// Some Type of Event Listener

//// 1.) click
btn.addEventListener ( "click",() => {
    alert("Single Click Done")
});

//// 2.) dblclick 

var dbtn = document.querySelector(".d-btn")

dbtn.addEventListener ( "dblclick",() => {
    alert("Double Click Done")
});

//// 3.) mouseover
var box = document.querySelector(".box");

box.addEventListener("mouseover",()=>{
    alert("Mousover")
});


// Remove Event Listener

var newBtn = document.querySelector(".btn-rmv");

var listener = ()=>{
    alert("Remove Event Listener not Done !")
}

newBtn.addEventListener("click",listener);
newBtn.removeEventListener("click",listener);


