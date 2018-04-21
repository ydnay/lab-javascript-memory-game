let MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0; // Jasmine error. Number, not array
  this.pairsGuessed = 0; // Jasmine error. Number, not array + name arror.
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  myCardsArr = cardsArr;
  shuffledArr = [];
  while (myCardsArr.length > 0) {
    randomCard = myCardsArr[Math.floor(Math.random() * myCardsArr.length)];
    cardIndex = myCardsArr.indexOf(randomCard);
    shuffledArr.push(randomCard);
    myCardsArr.splice(cardIndex, 1);
  }

  return shuffledArr;
};

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

// }

// MemoryGame.prototype.finished = function () {

// };
