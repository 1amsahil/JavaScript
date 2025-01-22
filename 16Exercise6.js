// Toggle

var toggle = document.querySelector(".toggle");
var currMode = "light";

toggle.addEventListener("click", ()=>{

    if(currMode == "light")
    {
        toggle.innerHTML = "Light Mode";
        toggle.style.backgroundColor = "white";
        toggle.style.color = "black";
        
        document.body.style.backgroundColor = "black";

        currMode = "dark";
    }
    else{
        toggle.innerHTML = "Dark Mode"
        toggle.style.backgroundColor = "black";
        toggle.style.color = "white";
        document.body.style.backgroundColor = "bisque"

        currMode = "light"
    }
})
