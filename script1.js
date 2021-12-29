//const playerX= "X";//may not be necessary
//const playerO= "O";//may not be necessary
//let currentPlayer= "X";

let player1Turn= true;
//let winner= null;
let board=[
    
    "","","",
    "","","",
    "","",""]
const startGameBtn=document.getElementById('gameStart');
let resetGamebtn= document.getElementById('restartGame');
let playerXScoreCard = document.getElementById('scoreX');
let playerOScoreCard = document.getElementById('score0');

boardSpaces= Array.from(document.querySelectorAll('.space'));

//just for visual referance
const winningCombos= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6]
    [2, 5, 8],
    [0, 4, 8],
    
]
//check if player x or player o has won
function wonGame(player){
    if(board[0]===player && board[1]===player &&board[2]===player){
        if(player==="X"){xWon()}else{oWon()};
        return true
        
        

        
    }else if(board[3]===player&& board[4]===player&& board[5]===player){
        if(player==="X"){xWon()}else{oWon()};
        return true;
console.log("won game")
    }else if(board[6]===player&& board[7]===player&& board[8]===player){
        if(player==="X"){xWon()}else{oWon()};
        return true
        console.log("won")
    }else if(board[0]===player&& board[3]===player&& board[6]===player){
        if(player==="X"){xWon()}else{oWon()};
        return true
console.log("won")
    }else if(board[1]===player&& board[4]===player&& board[7]===player){
        if(player==="X"){xWon();}else{oWon()};
        return true
console.log("won")
    }else if(board[2]===player&& board[4]===player&& board[6]===player){
        
console.log("won")
if(player==="X"){xWon()}else{oWon()};
return true
    }else if(board[2]===player&& board[5]===player&& board[8]===player){
console.log("won")
if(player==="X"){xWon()}else{oWon()};
return true
    }else if(board[0]===player&& board[4]===player&& board[8]===player){
        
        console.log("won")
        if(player==="X"){xWon()}else{oWon()};
        return true

    }else if(board.every(brd=>brd !=="")){//checking for draw
      draw();
    }
return false
}

console.log(boardSpaces)
//console.log(winningCombos)
/// if won gAME ===TRUE END GAME
function logEvent(e){
    //console.log
    console.log(e.target,e.target.innerText)
}
//don't allow spaces with a value to be selected
boardSpaces.forEach(space=>{
    space.addEventListener('click',(e)=>{
        
        if(board[e.target.id] !==""){
            return
        }
        if(player1Turn){
            e.target.innerText="X"
            board[e.target.id]="X"
            if(wonGame("X")===true){
                return
            }else{
                player1Turn=!player1Turn
                oTurn()
            }
            //wonGame("X")
            
        }else{
           
            e.target.innerText="O"
            board[e.target.id]="O"
            if(wonGame("O")===true){
                return 
            }else{
                player1Turn=!player1Turn
                xTurn()
            } 
            //wonGame("O")
            //player1Turn=!player1Turn
            //xTurn()
        }
       
        //console.log(board)
//logEvent(e)
    })
})

//check for winner/draw


//game messages
//const winnerMessage=`The winner is ${winner}!`
//const drawMessage= "It's a draw!"
//const turnMessage= `It's ${currentPlayer}'s turn!`
let space=document.querySelectorAll('.space') ;
//variables used for keeping score
let playerXScore=0;
let playerOScore=0;
//functions to display whose turn it is....
function xTurn(){
    
    let h3=document.getElementById('turn');
    h3.innerText="It's Player X's Turn!"

}
function oTurn(){
    let h3=document.getElementById('turn');
    h3.innerText="It's Player O's Turn!"
}
//functions to display who won and end game
function xWon(){
    let xWonMessage=document.getElementById('xWon');
    xWonMessage.innerText="Player X won!";
    endGame();
    
}

function oWon(){
    let oWonMessage= document.getElementById('xWon');
    oWonMessage.innerText="Player O won!";
    endGame();                
}
function draw(){
   
    let drawMessage=document.getElementById('xWon');
    drawMessage.innerText="It's a Draw !";
    let removeTurnMessage=document.getElementById('turn');
    document.body.removeChild(removeTurnMessage);
    
}

function endGame(){
    if(document.getElementById('xWon').innerText==="Player X won!" || document.getElementById('xWon').innerText==="Player O won!"  ){
        //let gameOver=document.getElementById('gameBox');
        //aSelectElement.disabled = aBool;
        //document.getElementById('gameBox').disabled=true;
        boardSpaces.forEach(spaces=>{spaces.disabled=true;})
        


        }}
        //function to reset game
 function resetGame(){
   
  
      location.reload();
}
 resetGamebtn.addEventListener('click', resetGame)
// function endGame(){
//     boardSpaces.forEach(space=>{
//         space.removeEventListener('click',(e)=>{
            
//             if(board[e.target.id] !==""){
//                 return
//             }
//             if(player1Turn){
//                 e.target.innerText="X"
//                 board[e.target.id]="X"
//                 if(wonGame("X")===true){
//                     return
//                 }else{
//                     player1Turn=!player1Turn
//                     oTurn()
//                 }
//                 //wonGame("X")
                
//             }else{
               
//                 e.target.innerText="O"
//                 board[e.target.id]="O"
//                 if(wonGame("O")===true){
//                     return
//                 }else{
//                     player1Turn=!player1Turn
//                     xTurn()
//                 }
//                 //wonGame("O")
//                 //player1Turn=!player1Turn
//                 //xTurn()
//             }
           
//             console.log(board)
//     //logEvent(e)
//         })
//     })
//}


//The game automatically starts with X's turn, which is alerted to user when "start game" button
//is clicked"
//startGameBtn.addEventListener('click',alertStart)
//when it is Player X's turn , an empty space that is clicked is filled with  neon white x or vector















