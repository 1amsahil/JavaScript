// Fetch API :- it provides an interface for fetching(sending/receiving) resources.

const URL = "https://dattebayo-api.onrender.com/tailed-beasts";

// Selecting Para Tag 
var fname = document.querySelector(".fact");

// Creating Image Tag
var img = document.createElement("img");

let getFacts = async() => {
    
    console.log(`getting data ....`);
    
    // fetch() method :- it is used to fetch a resource(data). it returns a promise.
    let response = await fetch(URL);
    
    console.log("Response :",response);
    console.log("Status : ",response.status); // shows 200 if successfull

    var ran = Math.floor(Math.random()*10);
    console.log("Random Number :",ran);
    
    // json() :- Data coverting into Javascript Object. it returns a promise.
    var data = await response.json();

    var allTailBeasts = data["tailed-beasts"];
    console.log(`All Tailed Beasts : `,allTailBeasts);

    var beast = allTailBeasts[ran];
    console.log("Tailed Beast : ",beast);

    var beastName = beast.name;
    console.log("Tailed Beast Name : ",beast.name);
    
    // Changing Inner Text <p>
    fname.innerText = beastName;

    // Image URL
    var imgURL = beast["images"];

    // Adding Attribute to Image Tag
    img.setAttribute("height",`100px`);
    img.setAttribute("src",`${imgURL}`);

    // Placing Image Tag
    document.querySelector(".image").append(img);
}

var btn = document.querySelector(".btn");
btn.addEventListener("click",getFacts);


