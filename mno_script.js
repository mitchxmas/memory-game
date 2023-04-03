// Global Variables and other declarations
let boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let numCards = 20;
const cardContainer = document.querySelector("#cardContainer");
const player1Box = document.querySelector("#player1Box");
const player2Box = document.querySelector("#player2Box");
const gameMsgBox = document.querySelector("#gameMsgBox");
const cardVersoGraphics = "./images/playingcard.jpg";
// "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/8007b.jpg";
const playerNumber = () => (player === 1 ? "1" : "2");
const whosTurn = () => `It's ${playerNumber()}'s turn`;

let player = 1;
let cardsPlayed = [];
let player1Score = 0;
let player2Score = 0;
let winner = 0;
let gameWon = false;

let cardDetails = [
  {
    pairIdx: 0,
    level: "easy",
    name: "bluey",
    link: "./images/char-bluey@2x.png",
    // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-bluey@2x.png",
  },
  {
    pairIdx: 1,
    level: "easy",
    name: "bingo",
    link: "./images/Bingo_dance-2x.png",
    // link: "https://www.bluey.tv/wp-content/uploads/2019/05/Bingo_dance-2x.png",
  },
  {
    pairIdx: 2,
    level: "easy",
    name: "bandit",
    link: "./images/char-bandit@2x.png",
    // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-bandit@2x.png",
  },
  {
    pairIdx: 3,
    level: "easy",
    name: "chilli",
    link: "./images/char-chilli@2x.png",
    // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-chilli@2x.png",
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
    link: "./images/char-indy@2x.png",
    // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-indy@2x.png",
  },
  {
    pairIdx: 10,
    level: "easy",
    name: "coco",
    link: "./images/coco@2x.png",
    // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco@2x.png",
  },
];

createArray(numCards);
createTiles();
// Functions
//TEMP FUNCTION ACTING AS A CONSOLE LOG
function showStuff() {
  const showMsg = `cardplayed length: ${cardsPlayed.length} & array: ${cardsPlayed}`;
  document.querySelector("#game--title").innerText = showMsg;
  // cardDetails[cellNme].link;
}

function playerClickCard(event) {
  const clickedCard = event.target;
  const clickedCardPair = parseInt(clickedCard.getAttribute("pair"));

  clickedCard.src = cardDetails[clickedCardPair].link;
  clickedCard.classList.add("clicked");
  cardsPlayed.push(clickedCardPair);

  showStuff();
  setTimeout(checkResults, 500);
}

function checkResults() {
  // if cardsPlayed.length=2 then check card the array for a matching pair
  if (cardsPlayed.length === 2) {
    if (cardsPlayed[0] === cardsPlayed[1]) {
      //cards are identical, a pair is found
      gameMsgBox.innerText = `Congrats player ${playerNumber()}, you found a pair! `;
      window.alert(`Congrats player ${playerNumber()}, you found a pair!`);
      hidePairs();

      player1Score += 1;
    } else {
      window.alert(`Sorry player ${playerNumber()}, bad luck`);
      turnClickedCardsOver();
    }

    cardsPlayed = [];
  }

  if (player1Score + player2Score === 0.5 * numCards) {
    gameMsgBox.innerHTML = winningMsg();
    gamePlaying = false;
    return;
  }

  let gameTie = (player1Score === player2Score) === 0.5 * numCards;
  if (gameTie) {
    winner = "T";
    gameMsgBox.innerHTML = winningMsg(); //`Game ended in a draw!`;
    gamePlaying = false;
    return;
  }

  // changePlayerFn();
}

// function changePlayerFn() {
//   player = player * -1;
//   const player1Box = document.querySelector("#player1Box");
//   const player2Box = document.querySelector("#player2Box");

//   if (player === 1) {
//     player1Box.classList.remove("hide");
//     player2Box.classList.add("hide");
//   }
//   if (player === -1) {
//     player1Box.classList.remove("hide");
//     player2Box.classList.add("hide");
//   }

//   gameMsgBox.innerHTML = whosTurn();
// }

function createArray(numCards) {
  for (let i = 0; i < numCards; i++) {
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
    var newCardImg = document.createElement("img");
    newCardImg.id = `img${i}`;
    newCardImg.classList.add("cardBox");
    newCardImg.setAttribute("pair", `${boardArray[i]}`);
    newCardImg.setAttribute("name", cardDetails[boardArray[i]].name);

    newCardImg.src = cardVersoGraphics;
    cardContainer.appendChild(newCardImg);
  }
  //still need to asign a pictures. Best to create an object (card num, pic details, value(active or note)??
}

function resetGameFn() {
  //turn all cards back over, reshuffle everything
  //set pair count to 0 for each player

  createArray(numCards);
  createTiles();
}

function changeDisplay() {
  //add 1 to the players score
  //hide the collected cards
}

function turnClickedCardsOver() {
  for (const item of document.querySelectorAll(".clicked")) {
    item.src = cardVersoGraphics;
  }
}

function hidePairs() {
  for (const item of document.querySelectorAll(".clicked")) {
    item.classList.remove("clicked");
    item.classList.add("hide");
  }
}

function winningMsg() {
  if (winner === 1) {
    return `Player 1 has won. Congrats`;
  } else if (winner === -1) {
    return `Player 2 has won. Congrats`;
  } else if (winner === "T") {
    return `It was a Tie.`;
  }
}

//EVent listeners
// document.querySelector("#img0").addEventListener("click", playerClickCard);

document
  .querySelectorAll(".cardBox")
  .forEach((card) => card.addEventListener("click", playerClickCard));
// document.querySelector(".gameReset").addEventListener("click", resetGameFn);
