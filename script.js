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

const playGame = (function(){
    const board = GameBoard().gameBoard;
    const player1 = createPlayer("Player1", "X");
    const player2 = createPlayer("Player2", "O");
    let playerTurn = 0;
    //method for instantiating the board.

    const createBoard = () =>{
        for (let i = 0; i < 9; i++){
            board.push(" ");
        }
        console.log(board);
    }

    const putMarker = () =>{
        let choice = prompt("Where do you want to put the mark? 1-9");
        choice = parseInt(choice);
        if (playerTurn === 0){
            markerPlacer(player1.marker,choice);
            checkWinner(player1.marker,board);
            playerTurn = 1;
        }
        else if (playerTurn === 1){
            markerPlacer(player2.marker);
            checkWinner(player2.marker,board);
            playerTurn = 0;
        }
    }

    const checkWinner = (marker,board) =>{
        if (board[0] && board[1] && board[2] === marker){ //first row
            console.log("Winner!");
        }
        else if (board[3] && board[4] && board[5] === marker){ //second row
            console.log("Winner!");
        }
        else if (board[6] && board[7] && board[8] === marker){ //third row
            console.log("Winner!");
        }
        else if (board[0]&&
                 board[3]&&
                 board[6] === marker){ //first column
            console.log("Winner!");
        }
        else if (board[1]&&
                 board[4]&&
                 board[7] === marker){ //second column
            console.log("Winner!");
        }
        else if (board[2]&&
                 board[5]&&
                 board[8] === marker){ //third column
            console.log("Winner!");
        }
        else if (board[0]&&
                 board[4]&&
                 board[8] === marker){ //upper left to bottom right
            console.log("Winner!");
        }
        else if (board[2]&&
                 board[4]&&
                 board[6] === marker){ //upper right to bottom left
            console.log("Winner!");
        }

    }
    function markerPlacer(marker,choice){
        let index = choice - 1;
        board[index] = marker;
    }
    return{
        createBoard,
        board,
        putMarker,
    }
})();