// Module Pattern

const BankAccount = (() => {
  let balance = 0; 

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ₹${amount}`);
    },

    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawn: ₹${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },

    getBalance() {
      return balance;
    }
  };
})();

BankAccount.deposit(5000);
BankAccount.withdraw(2000);

console.log(BankAccount.getBalance());