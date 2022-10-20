const prompt = require("prompt-sync")();

function display_board()
{
  console.log('\n');
  var display = "\t"
  for (var i = 1; i <= 9; i++) 
  {
    display += board[i] + "   ";
    if (i%3 === 0) 
    {
      display += '\n\t';
    }
  };
  console.log(display);
};

while (true)
{
  console.clear();
  
  console.log(String.raw`
    _____ ___ ____    _____  _    ____    _____ ___  _____    ____    _    __  __ _____ _ _ 
  |_   _|_ _/ ___|  |_   _|/ \  / ___|  |_   _/ _ \| ____|  / ___|  / \  |  \/  | ____| | |
    | |  | | |   _____| | / _ \| |   _____| || | | |  _|   | |  _  / _ \ | |\/| |  _| | | |
    | |  | | |__|_____| |/ ___ | |__|_____| || |_| | |___  | |_| |/ ___ \| |  | | |___|_|_|
    |_| |___\____|    |_/_/   \_\____|    |_| \___/|_____|  \____/_/   \_|_|  |_|_____(_(_)
                                                                                            
  `);
  console.log("Player 1 is X\nPlayer 2 is O");

  var moves = [];
  var board = {
    1:'1', 2:'2', 3:'3', 
    4:'4', 5:'5', 6:'6', 
    7:'7', 8:'8', 9:'9'
  };

  display_board();

  while (moves.length < 10)
  {
    let p1 = parseInt(prompt("Enter Player 1's move (X) from 1 to 9 : "));
    // console.log(p1<1 || p1>9, (p1 in moves), (p1<1 || p1>9 || (p1 in moves)));


    while (p1<1 || p1>9 || (moves.includes(p1)))
    {
      // console.log(p1<1 || p1>9, moves.includes(p1), (p1<1 || p1>9 || moves.includes(p1)));
      console.log("\n\t\t\tERROR!!\n\t\tPlease enter a number from 1 to 9 or a number that's not taken!!\n");
      p1 = parseInt(prompt("Enter Player 1's move (X) from 1 to 9 : "));
    }

    board[p1] = "X";
    moves.push(p1);

    console.clear();
    display_board();
    // console.log(moves);

    if ((board[1] === 'X') && (board[2] === 'X') && (board[3] ===  "X")) 
    {
      console.log("\n\t\t\tPlayer 1 wins by Row-1 Condition!!\n");
      break;
    }
    else if ((board[4] === 'X') && (board[5] === 'X') && (board[6] === "X")) 
    {
      console.log("\n\t\t\tPlayer 1 wins by Row-2 Condition!!\n");
      break;
    }
    else if ((board[7] === 'X') && (board[8] === 'X') && (board[9] === "X")) 
    {
      console.log("\n\t\t\tPlayer 1 wins by Row-3 Condition!!\n");
      break;
    }
    else if ((board[1] === 'X') && (board[4] === 'X') && (board[7] === "X")) 
    {
      console.log("\n\t\t\tPlayer 1 wins by Column-1 Condition!!\n");
      break;
    }
    else if ((board[2] === 'X') && (board[5] === 'X') && (board[8] === "X")) 
    {
      console.log("\n\t\t\tPlayer 1 wins by Column-2 Condition!!\n");
      break;
    }
    else if ((board[3] === 'X') && (board[6] === 'X') && (board[9] === "X")) 
    {
      console.log("\n\t\t\tPlayer 1 wins by Column-3 Condition!!\n");
      break;
    }
    else if ((board[1] === 'X') && (board[5] === 'X') && (board[9] === "X")) 
    {
      console.log("\n\t\t\tPlayer 1 wins by Diagonal-1 Condition!!\n");
      break;
    }
    else if ((board[3] === 'X') && (board[5] === 'X') && (board[7] === "X"))
    {
      console.log("\n\t\tPlayer 2 wins by Diagonal-2 Condition!!\n");
      break;
    }
    else if (moves.length === 9)
    {
      console.log("\n\t\t\t\tSORRY!! THE GAME IS TIED!!");
      break;
    }

    /* --------------------------------------------------------------------------------------------------- */
    /*                                            PLAYER-2 CODE                                            */
    /* --------------------------------------------------------------------------------------------------- */
    let p2 = parseInt(prompt("Enter Player 2's move (0) from 1 to 9 : "));
    // console.log(p2<1 || p2>9, moves.includes(p2), (p2<1 || p2>9 || moves.includes(p2)));
    
    while (p2 < 1 || p2 > 9 || moves.includes(p2)) 
    {
      // console.log(p2<1 || p2>9, moves.includes(p2), (p2<1 || p2>9 || moves.includes(p2)));
      console.log("\n\t\t\tERROR!!\n\t\tPlease enter a number from 1 to 9 or a number that's not taken!!\n");
      p2 = parseInt(prompt("Enter Player 2's move (0) from 1 to 9 : "));
    }
    
    board[p2] = "O";
    moves.push(p2);
    
    console.clear();
    display_board();
    // console.log(moves);

    if ((board[1] === "O") && (board[2] === "O") && (board[3] === "O")) 
    {
      console.log("\n\t\t\tPlayer 2 wins by Row-1 Condition!!\n");
      break;
    }
    else if ((board[4] === "O") && (board[5] === "O") && (board[6] === "O")) 
    {
      console.log("\n\t\t\tPlayer 2 wins by Row-2 Condition!!\n");
      break;
    }
    else if ((board[7] === "O") && (board[8] === "O") && (board[9] === "O")) 
    {
      console.log("\n\t\t\tPlayer 2 wins by Row-3 Condition!!\n");
      break;
    }
    else if ((board[1] === "O") && (board[4] === "O") && (board[7] === "O")) 
    {
      console.log("\n\t\t\tPlayer 2 wins by Column-1 Condition!!\n");
      break;
    }
    else if ((board[2] === "O") && (board[5] === "O") && (board[8] === "O")) 
    {
      console.log("\n\t\t\tPlayer 2 wins by Column-2 Condition!!\n");
      break;
    }
    else if ((board[3] === "O") && (board[6] === "O") && (board[9] === "O")) 
    {
      console.log("\n\t\t\tPlayer 2 wins by Column-3 Condition!!\n");
      break;
    }
    else if ((board[1] === "O") && (board[5] === "O") && (board[9] === "O")) 
    {
      console.log("\n\t\t\tPlayer 2 wins by Diagonal-1 Condition!!\n");
      break;
    }
    else if ((board[3] === "O") && (board[5] === "O") && (board[7] === "O"))
    {
      console.log("\n\t\tPlayer 2 wins by Diagonal-2 Condition!!\n");
      break;
    }
    else if (moves.length === 9)
    {
      console.log("\n\t\t\t\tSORRY!! THE GAME IS TIED!!");
      break;
    }
  }

  console.log("Do you want to play again?\n\t1. Yes\n\t2. No\n");
  choice = prompt("").toUpperCase();

  if ((choice === 'N') || (choice === 'NO') || (choice === '2'))
  {
      console.log("\n\n\n\t\t\t\tTHANK YOU FOR PLAYING THE GAME!!\n\n");
      break;
  }
}
