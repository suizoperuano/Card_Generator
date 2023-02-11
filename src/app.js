window.onload = function() {
  let drawnCardsHTML = document.querySelector(".drawCards");
  drawnCardsHTML.innerHTML = "Drawn cards: ";
};

let drawCard = () => {
  //creating arrays with card properties
  let symbolArray = ["♤", "♡", "♢", "♧"];
  let cardNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  //generating a card stack out of arrays
  let cardStack = [];
  for (let i = 0; i < symbolArray.length; i++) {
    for (let j = 0; j < cardNumbers.length; j++) {
      cardStack.push([cardNumbers[j], symbolArray[i]]);
    }
  }

  //defining random function
  let getRandom = myArray => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };

  //drawing a card from the stack
  let randomCard = getRandom(cardStack);
  console.log("picked card: " + randomCard[0] + randomCard[1]);

  //harmonizing HTML
  let suit = randomCard[1];
  let cardNumber = randomCard[0];

  let topSymbolHTML = document.querySelector(".symbol-top");
  let bottomSymbolHTML = document.querySelector(".symbol-bottom");
  let cardNumberHTML = document.querySelector(".card-number");
  let drawnCardsHTML = document.querySelector(".drawCards");
  let cardHTML = document.querySelector(".card");

  //conditioning the colors and card back
  let symbolColor = "black";
  let cardColor = "white";

  if (suit === "♡" || suit === "♢") {
    symbolColor = "red";
  }
  //applying to html
  cardNumberHTML.innerHTML = cardNumber;
  topSymbolHTML.innerHTML = suit;
  bottomSymbolHTML.innerHTML = suit;
  topSymbolHTML.style.color = symbolColor;
  bottomSymbolHTML.style.color = symbolColor;
  cardNumberHTML.style.color = symbolColor;
  drawnCardsHTML.innerHTML += ` ${cardNumber}${suit} `;
  cardHTML.style.backgroundColor = cardColor;
};
