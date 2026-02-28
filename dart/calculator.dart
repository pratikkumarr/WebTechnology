// Pratik Kumar
// CS 4C
// Univ Roll No. 2400290120187

import 'dart:io';

void main() {
  print("Enter first number");
  double a = double.parse(stdin.readLineSync()!);
  print("Enter second number");
  double b = double.parse(stdin.readLineSync()!);
  print("Enter the operation:");
  String s = stdin.readLineSync()!;
  switch (s) {
    case '+':
      print(a + b);
      break;
    case '-':
      print(a - b);
      break;
    case '*':
      print(a * b);
      break;
    case '/':
      print(a / b);
      break;
    default:
      print("Enter valid operation");
  }
}
