// void main() {
//   fetchData();
// }

// void fetchData() async {
//   print("Data is loading");
//   String data = await getData();
//   print(data);
//   print("Doing other operations");
// }

// Future<String> getData() async {
//   await Future.delayed(Duration(seconds: 5));
//   return "Data is loaded";
// }

void main() {
  fetchData();
}

void fetchData() async {
  print("Data is loading");
  getData().then((data) {
    print(data);
  });
  print("Doing other operations");
}

Future<String> getData() async {
  await Future.delayed(Duration(seconds: 5));
  return "Data is loaded";
}
