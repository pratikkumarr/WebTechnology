class Account {
  int? _balance;

  set setBalance(balance) {
    if (balance < 0) {
      print("Enter valid balance");
    } else {
      _balance = balance;
    }
  }

  get getBalance {
    return _balance;
  }
}
