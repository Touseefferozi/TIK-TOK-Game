let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector(".resbtn");

let newButton = document.querySelector("#NewGame");
let ResetButton = document.querySelector("#resetgame");
let msgContianer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trun0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// reset game btn

const resetGame = () => { 
  trun0 = true;
  eisable();
  msgContianer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was click");

    if (trun0) {
      box.innerText = "O";
      trun0 = false;
    } else {
      box.innerText = "X";
      trun0 = true;
    }

    // disabled box again
    box.disabled = true;

    checkWinner();
  });
});

// disable button

const disable = () => {
  for (let box of boxes) {
    box.disabled = true; // Corrected to 'true'
  }
};

// Enable btns

const eisable = () => {
  for (let box of boxes) {
    box.disabled = false; // Corrected to 'true'
    box.innerText = "";
  }
};

// buttons functionallty
const ShowWinner = (winner) => {
  msg.innerText = `Congratulations Winner is: ${winner}`;
  msgContianer.classList.remove("hide");
  disable();
};

// view pattren

const checkWinner = () => {
  for (let pattern of winPatterns) {
    console.log(pattern[0], pattern[1], pattern[2]);

    let pos1VAl = boxes[pattern[0]].innerText;
    let pos2VAl = boxes[pattern[1]].innerText;
    let pos3VAl = boxes[pattern[2]].innerText;

    if (pos1VAl === pos2VAl && pos2VAl === pos3VAl && pos1VAl !== "") {
      alert(`Player ${pos1VAl} wins!`);
      ShowWinner(pos1VAl);
      //   return;
    }
  }
};



newButton.addEventListener("click", resetGame);
ResetButton.addEventListener("click", resetGame);     
