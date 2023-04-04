// Global Variables and other declarations
let boardArray = [];
let numPairs = 4;
const cardContainer = document.querySelector("#cardContainer");
const player1Box = document.querySelector("#player1Box");
const player2Box = document.querySelector("#player2Box");
const player1ScoreBox = document.querySelector("#player1Score");
const player2ScoreBox = document.querySelector("#player2Score");
const gameMsgBox = document.querySelector("#gameMsgBox");
const consolMsg = document.querySelector("#console");
const cardVersoGraphics = "./images/playingcard.jpg";
// "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/8007b.jpg";
const playerNumber = () => (player === 1 ? "1" : "2");
const whosTurn = () => `It's ${playerNumber()}'s turn`;

let level = document.getElementById("levelMenu").value - 1;
let player = 1;
let cardsPlayed = [];
let player1Score = 0;
let player2Score = 0;
let winner = 0;
let gameWon = false;

let cardDetails = [
  // Easy Level Cards
  [
    {
      pairIdx: 0,
      level: "easy",
      name: "bluey",
      link: "./images/wildCard.png",
      // link: "./images/char-bluey.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-bluey.png",
    },
    {
      pairIdx: 1,
      level: "easy",
      name: "bingo",
      link: "./images/Bingo_dance.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/05/Bingo_dance-2x.png",
    },
    {
      pairIdx: 2,
      level: "easy",
      name: "bandit",
      link: "./images/char-bandit.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-bandit.png",
    },
    {
      pairIdx: 3,
      level: "easy",
      name: "chilli",
      link: "./images/char-chilli.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-chilli.png",
    },
    {
      pairIdx: 4,
      level: "easy",
      name: "muffin",
      link: "./images/Muffin-testshadow.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/07/Muffin-testshadow.png",
    },
    {
      pairIdx: 5,
      level: "easy",
      name: "jack",
      link: "./images/Jack_Army-1.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/Jack_Army-1.png",
    },
    {
      pairIdx: 6,
      level: "easy",
      name: "rusty",
      link: "./images/Rusty-1.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/06/Rusty-1.png",
    },
    {
      pairIdx: 7,
      level: "easy",
      name: "lucky",
      link: "./images/Lucky.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/06/Lucky.png",
    },
    {
      pairIdx: 8,
      level: "easy",
      name: "mackenzie",
      link: "./images/Mackenzie-newshadow.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/06/Mackenzie-newshadow.png",
    },
    {
      pairIdx: 9,
      level: "easy",
      name: "indy",
      link: "./images/char-indy.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-indy.png",
    },
    {
      pairIdx: 10,
      level: "easy",
      name: "coco",
      link: "./images/coco.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
    },
  ],
  // Medium Level Cards
  [
    {
      pairIdx: 0,
      level: "medium",
      name: "bluey1",
      link: "./images/char-bluey.png",
    },
    {
      pairIdx: 1,
      level: "medium",
      name: "bluey2",
      link: "./images/char-bluey2.png",
    },
    {
      pairIdx: 2,
      level: "medium",
      name: "bingo",
      link: "./images/Bingo_dance.png",
    },
    {
      pairIdx: 3,
      level: "medium",
      name: "bingo2",
      link: "./images/Bingo_dance2.png",
    },
    {
      pairIdx: 4,
      level: "medium",
      name: "bandit",
      link: "./images/char-bandit.png",
    },
    {
      pairIdx: 5,
      level: "medium",
      name: "bandit2",
      link: "./images/char-bandit2.png",
    },
    {
      pairIdx: 6,
      level: "medium",
      name: "chilly",
      link: "./images/char-chilli.png",
    },
    {
      pairIdx: 7,
      level: "medium",
      name: "chilli2",
      link: "./images/char-chilli2.png",
    },
    {
      pairIdx: 8,
      level: "medium",
      name: "indy",
      link: "./images/char-indy.png",
    },
    {
      pairIdx: 9,
      level: "medium",
      name: "indy2",
      link: "./images/char-indy2.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-indy.png",
    },
    {
      pairIdx: 10,
      level: "medium",
      name: "coco",
      link: "./images/coco.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
    },
    {
      pairIdx: 11,
      level: "medium",
      name: "coco2",
      link: "./images/coco2.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
    },
    {
      pairIdx: 12,
      level: "medium",
      name: "rusty",
      link: "./images/Rusty-1.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
    },
    {
      pairIdx: 13,
      level: "medium",
      name: "rusty2",
      link: "./images/Rusty-2.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
    },
  ],
  [
    {
      pairIdx: 0,
      level: "hard",
      name: "wildcard",
      link: "./images/wildCardRed.png",
    },
    {
      pairIdx: 0,
      level: "hard",
      name: "geo1",
      link: "./images/geo1.png",
    },
    {
      pairIdx: 1,
      level: "hard",
      name: "geo2",
      link: "./images/geo2.png",
    },
    {
      pairIdx: 2,
      level: "hard",
      name: "geo3",
      link: "./images/geo3.png",
    },
    {
      pairIdx: 3,
      level: "hard",
      name: "geo4",
      link: "./images/geo4.png",
    },
    {
      pairIdx: 4,
      level: "hard",
      name: "geo5",
      link: "./images/geo5.png",
    },
    {
      pairIdx: 5,
      level: "hard",
      name: "geo6",
      link: "./images/geo6.png",
    },
    {
      pairIdx: 6,
      level: "hard",
      name: "geo7",
      link: "./images/geo7.png",
    },
    {
      pairIdx: 7,
      level: "hard",
      name: "geo8",
      link: "./images/geo8.png",
    },
    {
      pairIdx: 8,
      level: "hard",
      name: "geo7",
      link: "./images/geo7.png",
    },
    {
      pairIdx: 9,
      level: "hard",
      name: "geo8",
      link: "./images/geo8.png",
    },
    {
      pairIdx: 10,
      level: "hard",
      name: "geo8",
      link: "./images/geo9.png",
    },
  ],
];

createArray(numPairs);
createTiles();
// Functions
//TEMP FUNCTION ACTING AS A CONSOLE LOG
function showStuff() {
  // const e = document.getElementById("levelMenu");
  // const value = e.value;

  consolMsg.innerText = `Level is : ${level}`;
}

function playerClickCard(event) {
  const clickedCard = event.target;
  const clickedCardPair = parseInt(clickedCard.getAttribute("pair"));

  if (
    clickedCard.classList.contains("clicked") ||
    clickedCard.classList.contains("hide")
  ) {
    return;
  } else {
    clickedCard.src = cardDetails[level][clickedCardPair].link;
    clickedCard.classList.add("clicked");
    cardsPlayed.push(clickedCardPair);
    setTimeout(checkResults, 500);
  }
}

function checkResults() {
  // if cardsPlayed.length=2 then check card the array for a matching pair
  if (cardsPlayed.length === 2) {
    if (cardsPlayed[0] === cardsPlayed[1]) {
      //cards are identical, a pair is found
      gameMsgBox.innerText = `Congrats player ${playerNumber()}, you found a pair! `;
      window.alert(`Congrats player ${playerNumber()}, you found a pair!`);
      changeScore();
      hidePairs();

      gameMsgBox.innerText = whosTurn();
    } else {
      window.alert(`Sorry player ${playerNumber()}, bad luck`);
      turnClickedCardsOver();
      changePlayerFn();
    }
    cardsPlayed = [];
    showStuff();
  }

  if (player1Score + player2Score === numPairs) {
    gameMsgBox.innerText = winningMsg();
    gamePlaying = false;
    return;
  }

  let gameTie = (player1Score === player2Score) === numPairs;
  if (gameTie) {
    winner = "T";
    gameMsgBox.innerText = winningMsg(); //`Game ended in a draw!`;
    gamePlaying = false;
    return;
  }
}

function changePlayerFn() {
  player = player * -1;

  if (player === 1) {
    player1Box.classList.remove("hide");
    player2Box.classList.add("hide");
  }
  if (player === -1) {
    player2Box.classList.remove("hide");
    player1Box.classList.add("hide");
  }

  gameMsgBox.innerHTML = whosTurn();
}

function createArray(numPairs) {
  for (let i = 0; i < 2 * numPairs; i++) {
    boardArray[i] = (i - (i % 2)) * 0.5;
  }
  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = boardArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [boardArray[i], boardArray[j]] = [boardArray[j], boardArray[i]];
  }
}

function createTiles() {
  for (let i = 0; i < boardArray.length; i++) {
    const newCardImg = document.createElement("img");
    newCardImg.id = `img${i}`;
    newCardImg.classList.add("cardBox");
    newCardImg.setAttribute("pair", `${boardArray[i]}`);
    newCardImg.setAttribute("name", cardDetails[level][boardArray[i]].name);
    newCardImg.src = cardVersoGraphics;
    cardContainer.appendChild(newCardImg);
    newCardImg.addEventListener("click", playerClickCard);
    // newCardImg.draggable = "true";
    // newCardImg.ondragstart = "drag(event)";
  }
  //still need to asign a pictures. Best to create an object (card num, pic details, value(active or note)??
}

function resetGameFn() {
  //turn all cards back over, reshuffle everything
  //set pair count to 0 for each player
  player = 1;
  player1Score = 0;
  player2Score = 0;

  const cardContainer = document.getElementById("cardContainer");
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  player1ScoreBox.innerText = 0;
  player2ScoreBox.innerText = 0;
  gameMsgBox.innerText = "Player 1 starts: click two cards on the board!";
  player1Box.classList.remove("hide");
  player2Box.classList.add("hide");
  boardArray = [];
  cardsPlayed = [];
  createArray(numPairs);
  createTiles();
}

function changeScore() {
  //if a pair is found add 1 to the players score
  if (player === 1) {
    player1Score += 1;
  } else {
    player2Score += 1;
  }
  document.querySelector("#player1Score").innerText = player1Score;
  document.querySelector("#player2Score").innerText = player2Score;
  return;
}

function turnClickedCardsOver() {
  for (const item of document.querySelectorAll(".clicked")) {
    item.src = cardVersoGraphics;
    item.classList.remove("clicked");
  }
}

function hidePairs() {
  for (const item of document.querySelectorAll(".clicked")) {
    item.classList.remove("clicked");
    item.classList.add("hide");
  }
}

function winningMsg() {
  if (player1Score > player2Score) {
    return "Player 1 has won";
  } else if (player1Score < player2Score) {
    return "Player 2 has won";
  } else {
    return "It's a tie";
  }
}

function selectLevel() {
  level = document.getElementById("levelMenu").value - 1;
  consolMsg.innerText = `Level is : ${level}`;
}

//Event Listeners

document.querySelector("#gameReset").addEventListener("click", resetGameFn);
document.querySelector("#levelMenu").addEventListener("change", selectLevel);
