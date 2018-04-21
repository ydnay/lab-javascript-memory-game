let MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0; // Jasmine error. Number, not array
  this.pairsGuessed = 0; // Jasmine error. Number, not array + name arror.
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  let myCardsArr = cardsArr;
  let shuffledArr = [];
  while (myCardsArr.length > 0) {
    let randomCard = myCardsArr[Math.floor(Math.random() * myCardsArr.length)];
    let cardIndex = myCardsArr.indexOf(randomCard);
    shuffledArr.push(randomCard);
    myCardsArr.splice(cardIndex, 1);
  }

  return shuffledArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  let res = false;
  this.pairsClicked++;
  if (firstCard === secondCard) {
    res = true;
    this.pairsGuessed++;
  }

  return res;
}

// MemoryGame.prototype.finished = function () {

// };
