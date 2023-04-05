// Global Variables and other declarations
let boardArray = [];
const pairsPerLevel = [8, 10, 12];
let numPairs = 8;
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

// let level = document.getElementById("levelMenu").value - 1;
let level = 0;

let player = 1;
let cardsPlayed = [];
let player1Score = 0;
let player2Score = 0;
let winner = 0;
let gameWon = false;
let wildCardClicked = [];

let cardDetails = [
  // Easy Level Cards
  [
    {
      pairIdx: 0,
      level: "easy",
      name: "bluey",
      link: "./images/char-bluey.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-bluey.png",
      cardOwner: 0,
    },
    {
      pairIdx: 1,
      level: "easy",
      name: "bingo",
      link: "./images/Bingo_dance.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/05/Bingo_dance-2x.png",
      cardOwner: 0,
    },
    {
      pairIdx: 2,
      level: "easy",
      name: "bandit",
      link: "./images/char-bandit.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-bandit.png",
      cardOwner: 0,
    },
    {
      pairIdx: 3,
      level: "easy",
      name: "chilli",
      link: "./images/char-chilli.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/char-chilli.png",
      cardOwner: 0,
    },
    {
      pairIdx: 4,
      level: "easy",
      name: "muffin",
      link: "./images/Muffin-testshadow.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/07/Muffin-testshadow.png",
      cardOwner: 0,
    },
    {
      pairIdx: 5,
      level: "easy",
      name: "jack",
      link: "./images/Jack_Army-1.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/Jack_Army-1.png",
      cardOwner: 0,
    },

    {
      pairIdx: 6,
      level: "easy",
      name: "lucky",
      link: "./images/Lucky.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/06/Lucky.png",
      cardOwner: 0,
    },

    {
      pairIdx: 7,
      level: "easy",
      name: "coco",
      link: "./images/coco.png",
      // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
      cardOwner: 0,
    },
    {
      pairIdx: 8,
      level: "easy",
      name: "charityPlease",
      link: "./images/charityPlease.png",
      cardOwner: 0,
    },
  ],
  // Medium Level Cards
  [
    {
      pairIdx: 0,
      level: "medium",
      name: "bluey1",
      link: "./images/char-bluey.png",
      cardOwner: 0,
    },
    {
      pairIdx: 1,
      level: "medium",
      name: "bluey2",
      link: "./images/char-bluey2.png",
      cardOwner: 0,
    },
    {
      pairIdx: 2,
      level: "medium",
      name: "bingo",
      link: "./images/Bingo_dance.png",
      cardOwner: 0,
    },
    {
      pairIdx: 3,
      level: "medium",
      name: "bingo2",
      link: "./images/Bingo_dance2.png",
      cardOwner: 0,
    },
    {
      pairIdx: 4,
      level: "medium",
      name: "bandit",
      link: "./images/char-bandit.png",
      cardOwner: 0,
    },
    {
      pairIdx: 5,
      level: "medium",
      name: "bandit2",
      link: "./images/char-bandit2.png",
      cardOwner: 0,
    },
    {
      pairIdx: 6,
      level: "medium",
      name: "chilly",
      link: "./images/char-chilli.png",
      cardOwner: 0,
    },
    {
      pairIdx: 7,
      level: "medium",
      name: "chilli2",
      link: "./images/char-chilli2.png",
      cardOwner: 0,
    },
    {
      pairIdx: 8,
      level: "medium",
      name: "indy",
      link: "./images/char-indy.png",
      cardOwner: 0,
    },
    {
      pairIdx: 9,
      level: "medium",
      name: "indy2",
      link: "./images/char-indy2.png",
      cardOwner: 0,
    },

    {
      pairIdx: 10,
      level: "medium",
      name: "charityPlease",
      link: "./images/charityPlease.png",
      cardOwner: 0,
    },
    {
      pairIdx: 11,
      level: "medium",
      name: "heroToZero",
      link: "./images/herotoZero.png",
      cardOwner: 0,
    },

    // {
    //   pairIdx: 10,
    //   level: "medium",
    //   name: "coco",
    //   link: "./images/coco.png",
    //   // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
    // },
    // {
    //   pairIdx: 11,
    //   level: "medium",
    //   name: "coco2",
    //   link: "./images/coco2.png",
    //   // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
    // },
    // {
    //   pairIdx: 12,
    //   level: "medium",
    //   name: "rusty",
    //   link: "./images/Rusty-1.png",
    //   // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
    // },
    // {
    //   pairIdx: 13,
    //   level: "medium",
    //   name: "rusty2",
    //   link: "./images/Rusty-2.png",
    //   // link: "https://www.bluey.tv/wp-content/uploads/2019/04/coco.png",
    // },
  ],
  // Hard Level Cards
  [
    {
      pairIdx: 0,
      level: "hard",
      name: "Bingo_dance",
      link: "./images/Bingo_dance.png",
      cardOwner: 0,
    },
    {
      pairIdx: 1,
      level: "hard",
      name: "Bingo_dance_Eye",
      link: "./images/Bingo_dance_Eye.png",
      cardOwner: 0,
    },
    {
      pairIdx: 2,
      level: "hard",
      name: "char-bandit",
      link: "./images/char-bandit.png",
      cardOwner: 0,
    },
    {
      pairIdx: 3,
      level: "hard",
      name: "char-bandit-hairy",
      link: "./images/char-bandit-hairy.png",
      cardOwner: 0,
    },
    {
      pairIdx: 4,
      level: "hard",
      name: "char-bluey",
      link: "./images/char-bluey.png",
      cardOwner: 0,
    },
    {
      pairIdx: 5,
      level: "hard",
      name: "char-bluey-onelegged",
      link: "./images/char-bluey-onelegged.png",
      cardOwner: 0,
    },
    {
      pairIdx: 6,
      level: "hard",
      name: "char-indy",
      link: "./images/char-indy.png",
      cardOwner: 0,
    },
    {
      pairIdx: 7,
      level: "hard",
      name: "char-indy-noTail",
      link: "./images/char-indy-noTail.png",
      cardOwner: 0,
    },
    {
      pairIdx: 8,
      level: "hard",
      name: "coco",
      link: "./images/coco.png",
      cardOwner: 0,
    },
    {
      pairIdx: 9,
      level: "hard",
      name: "coco-noclip",
      link: "./images/coco-noclip.png",
      cardOwner: 0,
    },
    {
      pairIdx: 10,
      level: "hard",
      name: "Muffin-testshadow",
      link: "./images/Muffin-testshadow.png",
      cardOwner: 0,
    },
    {
      pairIdx: 11,
      level: "hard",
      name: "Muffin-testshadow-nopatch",
      link: "./images/Muffin-testshadow-nopatch.png",
      cardOwner: 0,
    },

    {
      level: "hard",
      name: "charityPlease",
      link: "./images/charityPlease.png",
      cardOwner: 0,
    },

    {
      level: "hard",
      name: "heroToZero",
      link: "./images/herotoZero.png",
      cardOwner: 0,
    },
    {
      level: "hard",
      name: "crazyShuffle",
      link: "./images/crazyShuffle.png",
      cardOwner: 0,
    },
  ],
];

createArray(numPairs);
createTiles();

// Functions
//TEMP FUNCTION ACTING AS A CONSOLE LOG

function showStuff() {
  //   document.querySelector("#charityPlease").parentElement.id

  const tempArray = [];
  for (let i = 0; i < cardDetails[level].length; i++) {
    tempArray.push(cardDetails[level][i].cardOwner);
  }
  consolMsg.innerText = `Card Owner: ${tempArray}`;
}

//selecting a level must (i) change the level but also (ii) clear the existing board and hence perform a 'reset'
function selectLevel() {
  level = document.getElementById("levelMenu").value - 1;
  numPairs = pairsPerLevel[level];
  resetGameFn();
}

function playerClickCard(event) {
  const clickedCard = event.target;
  const clickedCardPair = parseInt(clickedCard.getAttribute("pair"));
  // Deactivate the level changing ability
  document.querySelector("#levelMenu").setAttribute("disabled", "");

  if (
    clickedCard.classList.contains("clicked") ||
    clickedCard.classList.contains("hide") ||
    clickedCard.classList.contains("wildCard")
  ) {
    return;
  } else if (
    clickedCard.name === "charityPlease" ||
    clickedCard.name === "heroToZero" ||
    clickedCard.name === "crazyShuffle"
  ) {
    clickedCard.src = cardDetails[level][clickedCardPair].link;
    wildCardClicked.push(clickedCard.name);
    clickedCard.classList.add("wildCard");
    cardsPlayed.push(clickedCardPair);
    setTimeout(checkResults, 500);

    setTimeout(checkResults, 500); //move the card to the player's area with a message on what the card does
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
    //HANDLE WILDCARDS
    if (wildCardClicked.length > 0) {
      gameMsgBox.innerText = `Congrats player ${playerNumber()}, you found a Wildcard! Click on it later to test its powers`;
      window.alert(
        `Congrats player ${playerNumber()}, you found a Wildcard! Click on it later to test its powers`
      );
      // Turn cards back over, in case of wildcard: hide
      turnClickedCardsOver();
      for (const item of document.querySelectorAll(".wildCard")) {
        item.classList.add("hide");
      }
      addWildCardtoPlayersArea();
      changePlayerFn();

      //HANDLE PAIRS - cards are identical, a pair is found
    } else if (cardsPlayed[0] === cardsPlayed[1]) {
      gameMsgBox.innerText = `Congrats player ${playerNumber()}, you found a pair!`;
      window.alert(`Congrats player ${playerNumber()}, you found a pair!`);
      changeScore();
      handlePairs();

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
  //add the wild cards in
  for (let i = 0; i <= level; i++) {
    boardArray.push(numPairs + i);
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
    newCardImg.setAttribute("name", cardDetails[level][boardArray[i]].name);
    newCardImg.setAttribute("pair", `${boardArray[i]}`);
    newCardImg.src = cardVersoGraphics;
    cardContainer.appendChild(newCardImg);
    newCardImg.addEventListener("click", playerClickCard);
  }
}

function resetGameFn() {
  //turn all cards back over, reshuffle everything
  //set pair count to 0 for each player
  player = 1;
  player1Score = 0;
  player2Score = 0;
  consolMsg.innerText = "";
  const cardContainer = document.getElementById("cardContainer");
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  player1ScoreBox.innerText = 0;
  player2ScoreBox.innerText = 0;
  gameMsgBox.innerText = "Select a level or start playing Player1!";
  player1Box.classList.remove("hide");
  player2Box.classList.add("hide");

  boardArray = [];
  cardsPlayed = [];
  wildCardClicked = [];
  player1Cards.innerHTML = "";
  player2Cards.innerHTML = "";
  createArray(numPairs);
  createTiles();
  document.querySelector("#levelMenu").removeAttribute("disabled");
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

function handlePairs() {
  for (const item of document.querySelectorAll(".clicked")) {
    for (let j = 0; j < cardDetails[level].length; j++) {
      if (cardDetails[level][j].name === item.name) {
        cardDetails[level][j].cardOwner = player;
      }
    }

    item.classList.remove("clicked");
    item.classList.add("hide");
  }
}

function addWildCardtoPlayersArea() {
  for (let i = 0; i < wildCardClicked.length; i++) {
    //Loop thru all cards within a level to find the wildCard and add the player as owner in the card detail array
    for (let j = 0; j < cardDetails[level].length; j++) {
      if (cardDetails[level][j].name === wildCardClicked[i]) {
        cardDetails[level][j].cardOwner = player;
      }
    }

    const newWildCardImg = document.createElement("img");
    newWildCardImg.id = wildCardClicked[i];
    newWildCardImg.classList.add("wildCardDisplay");
    newWildCardImg.src = `./images/${wildCardClicked[i]}.png`;

    if (wildCardClicked[i] === "charityPlease") {
      newWildCardImg.addEventListener("click", charityPleaseHandling);
    } else if (wildCardClicked[i] === "heroToZero") {
      newWildCardImg.addEventListener("click", heroToZeroHandling);
    } else if (wildCardClicked[i] === "crazyShuffle") {
      newWildCardImg.addEventListener("click", crazyShuffleHandling);
    }

    if (player === 1) {
      player1Cards.appendChild(newWildCardImg);
    } else {
      player2Cards.appendChild(newWildCardImg);
    }
  }
  wildCardClicked = [];
}

function charityPleaseHandling(event) {
  let whosCardIsIt = event.target.parentElement.id;

  if (whosCardIsIt === "player1Cards" && player === 1) {
    player1Score += 2;
    player2Score -= 2;
    alert(
      "A Charity card was played: the player takes 2 points from his opponent!"
    );
    event.target.style.display = "none";
    changePlayerFn();
  } else if (whosCardIsIt === "player2Cards" && player === -1) {
    player2Score += 2;
    player1Score -= 2;
    alert(
      "A Charity card was played: the player takes 2 points from his opponent!"
    );
    event.target.style.display = "none";
    changePlayerFn();
  }

  document.querySelector("#player1Score").innerText = player1Score;
  document.querySelector("#player2Score").innerText = player2Score;
}

function heroToZeroHandling(event) {
  let whosCardIsIt = event.target.parentElement.id;

  // if it's Player1's turn to play and player 1 is clicking his wildcard
  if (whosCardIsIt === "player1Cards" && player === 1) {
    player2Score = 0;
    for (const item of document.querySelectorAll(
      ".cardBox.hide:not(.wildCard)"
    )) {
      let i = parseInt(item.getAttribute("pair"));
      if (cardDetails[level][i].cardOwner === player * -1) {
        item.classList.remove("hide");
        item.src = cardVersoGraphics;
      }
    }
    alert("Your opponent's score is now 0...His pairs are back on the board!");
    event.target.style.display = "none";
    changePlayerFn();

    // if it's Player2's turn to play and player 2 is clicking his wildcard
  } else if (whosCardIsIt === "player2Cards" && player === -1) {
    player1Score = 0;
    for (const item of document.querySelectorAll(
      ".cardBox.hide:not(.wildCard)"
    )) {
      let i = parseInt(item.getAttribute("pair"));
      if (cardDetails[level][i].cardOwner === player) {
        item.classList.remove("hide");
        item.src = cardVersoGraphics;
      }
    }
    alert("Your opponent's score is now 0...His pairs are back on the board!");
    event.target.style.display = "none";
    changePlayerFn();
  }

  document.querySelector("#player1Score").innerText = player1Score;
  document.querySelector("#player2Score").innerText = player2Score;
}

function crazyShuffleHandling(event) {
  let whosCardIsIt = event.target.parentElement.id;

  let stateOfGameShuffled = Array.from(document.querySelectorAll(".cardBox"));

  const cardContainer = document.getElementById("cardContainer");
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = stateOfGameShuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [stateOfGameShuffled[i], stateOfGameShuffled[j]] = [
      stateOfGameShuffled[j],
      stateOfGameShuffled[i],
    ];
  }
  // repopulate the board with the shuffled items
  for (let i = 0; i < stateOfGameShuffled.length; i++) {
    cardContainer.appendChild(stateOfGameShuffled[i]);
  }

  //if the holder uses the card when it's his turn: fine, it is then followed by a playerChange
  //if the holder uses the card to interrupt the other player's turn, then no playerChange
  if (
    (whosCardIsIt === "player1Cards" && player === 1) ||
    (whosCardIsIt === "player2Cards" && player === -1)
  ) {
    changePlayerFn();
  }
  event.target.style.display = "none";
  alert("Crazy Shuffle!");
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

//Event Listeners

document.querySelector("#gameReset").addEventListener("click", resetGameFn);
document.querySelector("#levelMenu").addEventListener("change", selectLevel);
