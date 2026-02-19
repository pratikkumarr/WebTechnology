import 'dart:io';

void main() {
  print("Enter units:");
  int a = int.parse(stdin.readLineSync()!);
  double amount = 0.0;
  if (a < 0) {
    print("Invalid units");
  } else if (a <= 100) {
    amount = a * 1.5;
  } else if (a <= 200) {
    amount = 150 + (a - 100) * 2.5;
  } else if (a <= 300) {
    amount = 150 + 250 + (a - 200) * 4.0;
  } else {
    amount = 150 + 250 + 400 + (a - 300) * 5.0;
  }
  print(amount);
}
