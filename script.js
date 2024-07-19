let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector(".msg-container");

const userScorePara = document.querySelector("#User-score");
const computerScorePara = document.querySelector("#comp-score");

let win="You win";
let lose="You lose";

let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let RndIdx = Math.floor(Math.random() * 3);
    return options[RndIdx];
}

let drawgame=()=>{
    // console.log("Game is draw");
    msg.innerText="Game was draw!";
    // msg.style.backgroundColor = "green";
    // msg.style.display = "inline";
    // msg.style.textAlign ="center";
    // msg.style.padding= 20;
}

let showWinner=(userWin)=>{
    if (userWin){
        // console.log("You win!!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=win;
    }else{
        // console.log("You lose");
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=lose;
    }
    console.log('User score:',userScore);
    console.log('Computer score:',computerScore);

    if (userScore === 5) {
        console.log("User is already win the match");
        msg.innerText="User is the winner!";
        resetGame();
    } else if (computerScore === 5) {
        console.log("Computer is already win the match");
        msg.innerText="Computer is the winner!";
        resetGame();
    }
}

let PlayGame = (userChoice) => {
    console.log("user choice", userChoice);
    let compChoice = genCompChoice();
    console.log("computer choice", compChoice);

    if(userChoice===compChoice){
        drawgame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="scissors"? true:false;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"? true:false
        }else{
            userWin=compChoice==="paper"? true:false;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const userChoice = e.target.getAttribute("id");
        // console.log("you clicked", userChoice);
        PlayGame(userChoice);
    });
});

// alert("Note:The winner is choose when the score is 5");z



// popup-------
window.onload=()=>{
    let popup=document.querySelector("#welcome_popup");
    popup.style.display="block";

    setTimeout(closePopup,5000);
}

function closePopup(){
    let popup=document.querySelector("#welcome_popup");
    popup.style.display="none";
}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = 0;
    computerScorePara.innerText = 0;
    msg.innerText = "Play your move";
}

