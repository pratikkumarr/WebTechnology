class Student {
  String? name;
  int? age;
  int? marks;
  String? city;
  display() {
    print("$name $age $marks $city");
  }

  Student(this.name, this.age, this.marks, this.city) {}
}

void main() {
  Student s1 = Student("Ramesh", 30, 80, "Ghaziabad");
  Student s2 = Student("Mahesh", 20, 90, "Noida");
  Student s3 = Student("Ram", 35, 70, "Delhi");

  List<Student> students = [s1, s2, s3];

  for (var p in students) {
    p.display();
  }
}
