let MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0; // Jasmine error. Number, not array
  this.pairsGuessed = 0; // Jasmine error. Number, not array + name arror.
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  let myCardsArr = cardsArr; // copied the array parameter
  let shuffledArr = []; 
  while (myCardsArr.length > 0) { 
    let randomCard = myCardsArr[Math.floor(Math.random() * myCardsArr.length)]; // picks a random card
    let cardIndex = myCardsArr.indexOf(randomCard); // gets the index of the random card
    shuffledArr.push(randomCard); 
    myCardsArr.splice(cardIndex, 1); // removes the picked card from the remaining cards array
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

MemoryGame.prototype.finished = function () {
  let res = false;
  if (this.pairsGuessed === 12) {
    return true;
  }

  return res;
};
