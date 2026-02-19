void main() {
  List<String> names = ["Ramesh", "Mukesh", "Dhruv"];
  for (int i = 0; i < names.length; i++) {
    print(names[i]);
  }
  for (String s in names) {
    print(s);
  }
  print(names.length);
}
