let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock paper scissor
    const otions = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return otions[randIdx];
};

const drawGame = () => {
    console.log("game was draw:");
         msg.innerText="Game was Draw Play Again";
        msg.style.backgroundColor="blue";


}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you are win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you are lose");
        msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}
const playGame = (userChoice) => {
    console.log("user choics=", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choics=", compChoice);

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    }
    else {
        let userWin = true;

        if (userChoice === "rock") {
            //scissor ,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock ,scisssro
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock ,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        //console.log("choice was click",userChoice);
        playGame(userChoice);
    });
});

