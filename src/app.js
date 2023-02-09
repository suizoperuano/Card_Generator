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
  let getRandom = myArray => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };

  let randomSymbol = getRandom(symbolArray);
  let randomNumber = getRandom(cardNumbers);

  console.log(randomNumber + randomSymbol);

  let topSymbol = document.querySelector(".symbol-top");
  let bottomSymbol = document.querySelector(".symbol-bottom");
  let cardNumber = document.querySelector(".card-number");

  let symbolColor = "black";

  if (randomSymbol === "♥" || randomSymbol === "♦") {
    symbolColor = "red";
  }

  cardNumber.innerHTML = randomNumber;
  topSymbol.innerHTML = randomSymbol;
  bottomSymbol.innerHTML = randomSymbol;
  topSymbol.style.color = symbolColor;
  bottomSymbol.style.color = symbolColor;
};
