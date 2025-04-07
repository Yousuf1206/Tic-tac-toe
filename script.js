const winning_combo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const board=document.getElementById("container");
const squares=document.getElementsByClassName("square");

const players=['X','O'];

let currentPlayer=players[0];

const endMessage = document.createElement("h1");

endMessage.textContent="X's turn";
endMessage.style.marginTop="30px";
endMessage.style.textAlign="center";

board.after(endMessage);

let someoneWon=false;

function checkWin(){
    for(let i=0;i<winning_combo.length;i++){
        const[a,b,c]=winning_combo[i];
        if(
            squares[a].textContent==currentPlayer &&
            squares[b].textContent==currentPlayer &&
            squares[c].textContent==currentPlayer 
        )return true;
    }return false;
}

function checkTie(){
    for(let i=0;i<squares.length;i++){
        if(squares[i].textContent==="")return false;
    }
    return true;
}

function restartButton(){
    someoneWon=false;
    for(let i=0;i<squares.length;i++){
        squares[i].textContent="";
    }
    endMessage.textContent="X's turn";
    currentPlayer=players[0];
}

for(let i=0;i<squares.length;i++){
    squares[i].addEventListener("click",function(){
        if(someoneWon) return;
        if(squares[i].textContent!=="")return;

        squares[i].textContent=currentPlayer;

        if(checkWin()){
            someoneWon=true;
            endMessage.textContent=`Congrats!! ${currentPlayer} Won`;
            return;
        }
        if(checkTie()){
            someoneWon=true;
            endMessage.textContent="It's a draw!!";
            return;
        }
        currentPlayer=currentPlayer===players[0]
        ?players[1]:players[0];

        endMessage.textContent=`It's ${currentPlayer}'s turn`; 
    });
}

