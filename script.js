//create the gameboard inside the GameBoard object using factory function as an array.

function GameBoard() {
    const gameBoard = [];

    return{
        gameBoard,
    }
}
//factory function creating a player.
function createPlayer(name, marker){
    return{
        name,
        marker,
    }
}
const button = document.querySelector(".start-btn").addEventListener("click", (event) =>{
    if (document.querySelector("#input-name").value === ""){
        alert("Please fill player 1's name!");
        event.preventDefault;
    }
    else if (document.querySelector("#input-name2").value === ""){
        alert("Please fill player 2's name!");
        event.preventDefault;
    }
    else{
        playGame.deleteAll();
        playGame.makeUI();
    }
})

const playGame = (function(){
    const board = GameBoard().gameBoard;
    const player1 = createPlayer(" ", "X");
    const player2 = createPlayer(" ", "O");
    let playerTurn = 0;
    let winner = " ";
    let tieCounter = 0;
    //method for instantiating the board.

    const createBoard = () =>{
        for (let i = 0; i < 9; i++){
            board.push(" ");
        }
        console.log(board);
    }
  
    function makeUI(){
        //create the container for the board and the info.
        const container = document.querySelector(".container");
        container.style.flexDirection = "column";
        const upper = document.createElement("div");
        upper.classList.add("sample")
        upper.classList.add("upper")
        container.appendChild(upper);

        //create the board.
        createBoard(); //instantiates the board.
        const brd = document.createElement("div");
        brd.classList.add("board");
        upper.appendChild(brd);
        for (let i = 0; i < board.length; i++){
            const tile = document.createElement("div");
            tile.addEventListener("click", () => {
                if (playerTurn == 0){
                    if (winner !== " "){
                        turn.textContent = `${winner} WON!`
                    }
                    else if (board[i] == " "){
                        turn.textContent = `${player2.name}'s turn`;
                        tile.style.backgroundImage = 'url("./svgs/x.svg")';
                        board[i] = "X";
                        tile.style.backgroundSize = '90%';
                        tieCounter += 1;
                        playerTurn = 1;
                        checkWinner(player1.marker,board,player1.name);
                    }
                }
                else{
                    if (winner !== " "){
                        return;
                    }
                    else if(board[i] == " "){
                        turn.textContent = `${player1.name}'s turn`;
                        tile.style.backgroundImage = 'url("./svgs/o.svg")';
                        board[i] = "O";
                        tile.style.backgroundSize = '90%';
                        tieCounter += 1;
                        console.log(tieCounter);
                        checkWinner(player2.marker,board,player2.name);
                        playerTurn = 0;
                    }
                }
            });
            brd.appendChild(tile);
        }

        //create the information part.
        const bottom = document.createElement("div");
        bottom.classList.add("sample");
        bottom.classList.add("bottom");
        container.appendChild(bottom);

        const top = document.createElement("div");
        top.classList.add("top");
        bottom.appendChild(top);

        const d1 = document.createElement("div");
        d1.textContent = player1.name;
        const d2 = document.createElement("div");
        d2.textContent = player2.name;
        top.appendChild(d1);
        top.appendChild(d2);

        const bot = document.createElement("div");
        bot.classList.add("bot");
        bottom.appendChild(bot);

        const turn = document.createElement("div");
        turn.classList.add("turn");
        turn.textContent = `${player1.name}'s turn`;
        bot.appendChild(turn);
    }

    function deleteAll(){
        player1.name = document.querySelector("#input-name").value;
        player2.name = document.querySelector("#input-name2").value;
        const container = document.querySelector(".container");
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }
    //this checks if there is a winning tile or its a tie.
    const checkWinner = (marker,board,name) =>{
        const turn = document.querySelector(".turn");
        if (board[0] === marker && board[1] === marker && board[2] === marker){ //first row
            alert(`The winner is ${name}`);
            winner = name;
            turn.textContent = `${name} WON! Congratulations`;    
        }
        else if (board[3]=== marker && board[4]=== marker && board[5] === marker){ //second row
            alert(`The winner is ${name}`);
            winner = name;
            turn.textContent = `${name} WON! Congratulations`;            
        }
        else if (board[6]=== marker && board[7]=== marker && board[8] === marker){ //third row
            alert(`The winner is ${name}`);
            winner = name;
            turn.textContent = `${name} WON! Congratulations`;          
        }
        else if (board[0]=== marker&&
                 board[3]=== marker&&
                 board[6] === marker){ //first column
                    alert(`The winner is ${name}`);
                    winner = name;
                    turn.textContent = `${name} WON! Congratulations`;          
        }
        else if (board[1]=== marker&&
                 board[4]=== marker&&
                 board[7] === marker){ //second column
                    alert(`The winner is ${name}`);
                    winner = name;
                    turn.textContent = `${name} WON! Congratulations`;       
        }
        else if (board[2]=== marker&&
                 board[5]=== marker&&
                 board[8] === marker){ //third column
                    alert(`The winner is ${name}`);
                    winner = na;      
                    turn.textContent = `${name} WON! Congratulations`;    
        }
        else if (board[0]=== marker&&
                 board[4]=== marker&&
                 board[8] === marker){ //upper left to bottom right
                    alert(`The winner is ${name}`);
                    winner = name;
        }
        else if (board[2]=== marker&&
                 board[4]=== marker&&
                 board[6] === marker){ //upper right to bottom left
                    alert(`The winner is ${name}`);
                    winner = name;
                    turn.textContent = `${name} WON! Congratulations`;            
        }
        else if (tieCounter === 9){
                alert("The game is a tie!");
                turn.textContent = "The game is a tie";
        }
    }
    return{
        createBoard,
        board,
        deleteAll,
        makeUI,
        player1,
        player2,
    }
})();
