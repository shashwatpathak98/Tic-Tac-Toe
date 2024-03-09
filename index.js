const symbol = ["X", "O"];

let symbolIndex = 0;
document.querySelector(".winner").textContent = `${symbol[0]}'s turn`

const clicked = (cell) => {
  if (!cell.textContent) {
    cell.textContent = symbol[symbolIndex];    
    symbolIndex = (symbolIndex + 1) % symbol.length;
    document.querySelector(".winner").textContent = `${symbol[symbolIndex]}'s turn`;  
    const winner = checkWinner();
    const draw = checkDraw();
    if (winner || draw) {
      const message = winner ? `${winner} Wins !` : "It's a draw !";
      document.querySelector(".winner").textContent = message;
      document.getElementById("replayBtn").style.display = "block";
      document.querySelector(".tic-tac-toe").classList.add("blur");
      
    }  
  }
  
};


const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], //Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], //Columns
  [0, 4, 8],
  [2, 4, 6], //Diagonals
];

const checkWinner = () => {
  const cells = document.querySelectorAll(".board");
  for (const [a, b, c] of winningCombinations) {
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      cells[a].classList.add("winning-cell");
      cells[b].classList.add("winning-cell");
      cells[c].classList.add("winning-cell");
      return cells[a].textContent;
    }
  }
  return null;
};

const checkDraw = () => {
  const cells = document.querySelectorAll(".board");
  return [...cells].every((cell) => cell.textContent);
};

const reload = () => {
  window.location.reload();
};



