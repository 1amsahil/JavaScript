text = document.querySelector("h2");
console.log(text);
text.innerText = text.innerText + " By Apni College"

// box

box = document.querySelectorAll(".box");

let idx = 1;
for(let b of box)
{
    b.innerText =  `New Box ${idx}`
    idx++
}