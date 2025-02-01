
var BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/";

let dropdowns = document.querySelectorAll(".dropdown select");

// Adding Option in Select 'from' and 'to'
for(let select of dropdowns )
    {
        // CountryList Fetching Data from 'codes.js'
        for(let code in countryList)
            {
                let newOpt = document.createElement("option");
                newOpt.innerText = code
                newOpt.value = code
                
                if(select.name === "from" && code ==="USD")
                {
                    newOpt.selected = "selected";
                }
                else if(select.name === "to" && code ==="INR")
                {
                    newOpt.selected = "selected";
                }
            select.append(newOpt)
        }
        // Flag Change  Event Listener
        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        })
    }

// Flag Update Function
let updateFlag = (element) => 
{
    let currCode = element.value;
    let countryCode = countryList[currCode];

    newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

let btn = document.querySelector(".btn");

let fromCurr = document.querySelector(".select-from");
let toCurr = document.querySelector(".select-to");
    
// Button Working
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    // Amount Updation & Conditions
    let amount = document.querySelector("#amount");
    let amtValue = amount.value;

    console.log("Amount : ",amtValue)

    if(amtValue < 0 )
    {
        amount.value = 1;
        amtValue = 1;
    }

    if(amtValue != "" || amtValue < 0)
    {
        let fromValue = fromCurr.value.toLowerCase(); // From Value in Lower Case()
        let toValue = toCurr.value.toLowerCase(); // To Value in Lower Case()

        // Link Updation
        let URL = `${BASE_URL}${fromValue}.json`

        // Fetching Data
        let response = await fetch(URL);
        
        // Coverting into js Object
        let data = await response.json();
        
        // Retrieving Data
        let fromCurrVal = data[fromValue];
        console.log(fromCurrVal);
        
        var ExchangeVal = fromCurrVal[toValue];
        console.log("Exchange Value : ",ExchangeVal);
        
        // Final Mesaage or Amount Exchange Updation in HTML
        var msg = document.querySelector(".msg");
        msg.innerText = `${amtValue} ${fromCurr.value} = ${amtValue*ExchangeVal} ${toCurr.value} `;

    }
})
