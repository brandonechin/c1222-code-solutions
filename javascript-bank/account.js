/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var newTransaction = new Transaction('withdrawal', amount);
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var depositTotal = 0;
  var withdrawalTotal = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      depositTotal += this.transactions[i].amount;
    }
  }

  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      withdrawalTotal += this.transactions[i].amount;
    }
  }
  return depositTotal - withdrawalTotal;
};
