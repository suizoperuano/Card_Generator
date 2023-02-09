window.onload = function() {
  console.log("function works");

  let symbolArray = ["♥", "♦", "♣", "♠"];
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

  let cardStack = [];
  for (let i = 0; i < symbolArray.length; i++) {
    for (let j = 0; j < cardNumbers.length; j++) {
      cardStack.push([cardNumbers[j], symbolArray[i]]);
    }
  }

  let getRandom = myArray => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };

  let randomCard = getRandom(cardStack);

  console.log("picked card: " + randomCard[0] + randomCard[1]);

  let suit = randomCard[1];
  let cardNumber = randomCard[0];

  let topSymbolHTML = document.querySelector(".symbol-top");
  let bottomSymbolHTML = document.querySelector(".symbol-bottom");
  let cardNumberHTML = document.querySelector(".card-number");

  let symbolColor = "black";

  if (suit === "♥" || suit === "♦") {
    symbolColor = "red";
  }

  cardNumberHTML.innerHTML = cardNumber;
  topSymbolHTML.innerHTML = suit;
  bottomSymbolHTML.innerHTML = suit;
  topSymbolHTML.style.color = symbolColor;
  bottomSymbolHTML.style.color = symbolColor;
};
