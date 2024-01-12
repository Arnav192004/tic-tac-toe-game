let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = true ;
    enableBoxed();
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       
        if(turnO)
{
    box.innerText = "O";
    turnO = false;
}    
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
});
});

const disableBoxed = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
}

const enableBoxed = () =>{
    for(let box of boxes){
        box.disabled = false ;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
}

const showwinner = (winner)=>{
      msg.innerText = `Congratulation , Winner is ${winner}🏅`;
      msgContainer.classList.remove("hide");
      disableBoxed();
}

const checkWinner = () => {
    let draw = true;

    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
                return; // Exit the function early if there is a winner
            }
        } else {
            draw = false; // If any box is not filled, the game is not a draw
        }
    }

    if (draw) {
        msg.innerText = "It's a draw! 🤝";
        msgContainer.classList.remove("hide");
        disableBoxed();
        return; // Exit the function if it's a draw
    }
}

 

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
