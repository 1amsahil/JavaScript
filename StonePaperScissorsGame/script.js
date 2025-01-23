let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userValue = document.querySelector("#user");
let compValue = document.querySelector("#comp");

// User Choice
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });

});

// Generate Computer Choice
const genCompChoice = () => {
    var options = ["rock", "paper", "scissors"];
    var ranIdx = Math.floor(Math.random()* 3);

    return options[ranIdx];
}

// Game Logic
const playGame = (userchoice) => {
    console.log("user =",userchoice);

    var compchoice = genCompChoice();
    console.log("computer =",compchoice);

    if(userchoice == compchoice)
    {
        // Draw
        drawGame();
    }
    else
    {
        let userWin = true;
        
        if(userchoice === "rock")
            // paper scissors
        {
            userWin = compchoice === "paper" ? false : true;
        }

        else if (userchoice === "paper")
            // rock scissors
        {
            userWin = compchoice === "scissors" ? false : true;
        }

        else if (userchoice === "scissors")
            // rock paper
        {
            userWin = compchoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
}

// Draw Function
const drawGame = () => {
    console.log("Match Draw !");
    msg.innerText = "Macth Draw! Play again";
    msg.style.color = "black";
};

// Winner Function
showWinner = (userWin) =>
{
    if(userWin)
    {
        console.log("You Wins !");

        msg.innerText = "You Wins!";
        msg.style.color = "green";

        userscore++;
        console.log(userscore);

        userValue.innerText = `${userscore}`;
    }
    else
    {
        console.log("Computer Wins !");

        msg.innerText = "You Lose! Computer Wins";
        msg.style.color = "red";

        compscore++;
        console.log(compscore);
        
        compValue.innerText = `${compscore}`;
    }
}