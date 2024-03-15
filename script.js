let moves = document.querySelectorAll(".img-box");
let winnerBox = document.querySelector("#win-para");

let userChoice = document.querySelector("#user-choice");
let compChoice = document.querySelector("#comp-choice");

let humanCounter = document.querySelector("#human-counter");
let botCounter = document.querySelector("#bot-counter");

let u_count = 0;
let c_count = 0;

moves.forEach((move)=>{
    move.addEventListener("click", ()=>{
        const userMove = move.getAttribute("id");
        playGame(userMove);
    });
});

const genCompMove = () => {
    const moveArr = ["Rock", "Paper", "Scissors"];
    return moveArr[Math.floor(Math.random()*3)];
}

const ifDraw = () => {
    winnerBox.innerText = "It was a Draw! Choose Again!!"
}

const playGame = (userMove) => {
    const compMove = genCompMove();

    userChoice.innerText = userMove;
    compChoice.innerText = compMove;

    if(userMove===compMove){
        ifDraw();
    } else{
        let userWin = true; 

        if(userMove==="Rock"){
            userWin = compMove==="Scissors"?true:false;
        } else if(userMove==="Paper"){
            userWin = compMove==="Rock"?true:false;
        }
        else{
            userWin = compMove==="Paper"?true:false;
        }

        if(userWin){
            u_count++;
            humanCounter.innerText = u_count;
            winnerBox.innerText = "You Won! Congratulations!!"        
        }
        else{
            c_count++;
            botCounter.innerText = c_count;
            winnerBox.innerText = "You Lost. Try Again!"
        }
    }     
}