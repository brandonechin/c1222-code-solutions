console.log('Lodash is loaded:', typeof _ !== 'undefined');
var cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Ace', 'King', 'Queen', 'Jack'];
var suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var cards = [];

for (let i = 0; i < cardNumber.length; i++) {
  for (let j = 0; j < suit.length; j++) {
    var cardObj = {};
    cardObj[cardNumber[i]] = suit[j];
    cardObj.points = i + 2;
    cards.push(cardObj);
  }
}
for (let i = 0; i < cards.length; i++) {
  if (cards[i].King || cards[i].Queen || cards[i].Jack) {
    cards[i].points = 10;
  }
}
console.log(cards);
var shuffledCards = _.shuffle(cards);
console.log(shuffledCards);
var players = [
  {
    name: 'player 1',
    card: [shuffledCards[0], shuffledCards[1]]
  },
  {
    name: 'player 2',
    card: [shuffledCards[2], shuffledCards[3]]
  },
  {
    name: 'player 3',
    card: [shuffledCards[4], shuffledCards[5]]
  },
  {
    name: 'player 4',
    card: [shuffledCards[6], shuffledCards[8]]
  }
];

console.log('player 1', players[0].card);
console.log('player 2', players[1].card);
console.log('player 3', players[2].card);
console.log('player 4', players[3].card);

for (let i = 0; i < players.length; i++) {
  var total = players[i].card[0].points + players[i].card[1].points;
  players[i].total = total;
}
console.log(players[0]);
console.log(players[1]);
console.log(players[2]);
console.log(players[3]);

var playersTotals = [];
for (let i = 0; i < players.length; i++) {
  playersTotals.push(players[i].total);
}
console.log(playersTotals);
console.log(Math.max(...playersTotals));
for (let i = 0; i < players.length; i++) {
  if (Math.max(...playersTotals) === players[i].total) {
    console.log(players[i]);
  }
}
