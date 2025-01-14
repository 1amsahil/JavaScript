while(true)
{
    var random = Math.floor(Math.random()*10);
    console.log("Random : ",random);

    var number = prompt("Enter a number to Guess.");
    console.log("User Number : ",number);
    
    if(number == random)
    {
        alert("Wow ! you guess the right number !");
        break;
    }
    else
    {
        alert("Try Again, you the right number !");
    }
}


