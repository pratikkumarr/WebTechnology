import 'dart:io';

// void main() {
//   print("Enter first number");
//   double num1 = double.parse(stdin.readLineSync()!);
//   print("Enter second number");
//   double num2 = double.parse(stdin.readLineSync()!);

//   double sum = num1 + num2;
//   print(sum);
// }

// ------- if else -------

// void main() {
//   print("Enter age:");
//   int age = int.parse(stdin.readLineSync()!);
//   if (age >= 18) {
//     print("Eligible for voting");
//   } else {
//     print("Not Eligible for Voting");
//   }
// }

// ----------- Calculator --------------

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
