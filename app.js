let btnEl = document.querySelectorAll(".btn");
let winPos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let playerO = true;

const handleClick = (event) => {
  if (playerO) {
    event.target.innerText = "O";
    playerO = false;
  } else {
    event.target.innerText = "X";
    playerO = true;
  }
  event.target.disabled = true;
  Winner();
};

const Winner = () => {
  let winnerFound = false;
  for (let pattern of winPos) {
    let Pos1 = btnEl[pattern[0]].innerText;
    let Pos2 = btnEl[pattern[1]].innerText;
    let Pos3 = btnEl[pattern[2]].innerText;
    if (Pos1 !== "" && Pos2 !== "" && Pos3 !== "") {
      if (Pos1 === Pos2 && Pos2 === Pos3) {
        winnerFound=true;
        msg.innerText = `🎉 ${Pos1} is the Winner🎉`;
        break;
      }
    }
  }
  if (!winnerFound) {
  msg.style.display = "none";
} else {
  msg.style.display = "block";
}
};

const EnableBoxes = () => {
  playerO = true; 
  btnEl.forEach((box) => {
    box.innerText = "";
    box.disabled = false; 
    box.removeEventListener("click", handleClick);
    box.addEventListener("click", handleClick);
  });
};

btnEl.forEach((box) => {
  box.addEventListener("click", handleClick);
});

reset.addEventListener("click", () => {
  btnEl.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    msg.style.display = "none";
    
  });
});

newGame.addEventListener("click", () => {
  EnableBoxes();
  msg.style.display = "none";
});
