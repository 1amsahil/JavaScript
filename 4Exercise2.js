var random = Math.floor(Math.random()*10);
console.log("Random : ",random);

let number = prompt("Enter a number to Guess.");
console.log("User Number : ",number);


while(number != random)
{
    alert("Try Again !");
    number = prompt("Enter a number to Guess.");

}
alert("Wow ! you guess the right number !");


