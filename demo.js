// var age = 20
// const pi = 3.14

// let i = 0

// for(var k=0; i<10; i++){
//     i++;
// }

// age = 18

// console.log(i)
// console.log(age)
// console.log(pi)

// function outer(){
//     let a = 10
//     function inner(){
//         console.log(a)
//     }
//     inner()
// }
// outer()



    // const readlineSync = require('readline-sync');
    
    // const num = readlineSync.question("Enter the number:");
    // const n = Number(num);

    // function isPrime(x){
    //     if(x<2)
    //         return false
    //     for(let i=2; i<x/2; i++){
    //         if(x%i==0){
    //             return false
    //         }
    //     }
    //     return true
    // }

    // if(isPrime(n) == true){
    //     console.log("Number is prime")
    // } else {
    //     console.log("Number is not prime")
    // }


// const readline = require("readline");

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout;
// })

// let marks = [];
// let count;

// r1.question("How many students? ", function(n)){
//     count = Number(n);
//     askMarks(0);
// }

// function askMarks(i){
//     if(i<count){
//         r1.question()
//     }
// }

// ---------------  Template Literal  --------------
// let fname = "Akash"
// let lname = "Goel"

// console.log(`Hello my name is ${fname} ${lname}`)ṇ

// let msg = `Hello dear students
// welcome to the class of JS
// Focus on your topics`
// console.log(msg)

// -------------------- Functions -------------------

// const add = function(a,b){
//     return a+b
// }

// console.log(add(2,3))

// -------  Arrow Function  -------
// const add = (a,b) => a+b
// console.log(add(2,3))

// let a = 10
// let b = 20

// console.log(`The sum of ${a} and ${b} is ${a+b}`)

// const obj = {
//     name: "Akash",
//     age: 35,
//     Welcome: function(){
//         console.log("My name is", this.name, this.age)
//         console.log(this)
//     }
// };

// obj.Welcome();

// obj.name = "Vikas"
// obj.Welcome();

// console.log(this)


// 'use strict'
// function abc(){
//     a = 10
//     console.log(this.a)
// }
// abc()


// const obj = {
//     name: "Rahul",
//     normalFn: function(){
//         console.log("Normal: ", this.name);
//     }, arrowFn: ()=>{
//         console.log("Arrow:", this.name);
//     }
// };

// obj.normalFn();
// // obj.arrowFn();

// const obj = {
//     name: "Rahul",
//     showName: function(){
//         const arrowFn= ()=>{
//         console.log("Arrow:", this.name);
//         }
//         arrowFn();
//     }
// };

// obj.showName();

// ------- Calculator ---------


// const ans = (x, a, b) => {
//     switch(x){
//         case 1: return a+b
//         case 2: return a-b
//         case 3: return a*b
//         case 4: return a/b
//         default: return "Invalid"
//     }
// }

// console.log(ans(1, 10, 2))


// ------- Object and array Destructuring -------

// const user = {
//     firstname: "Akash",
//     lastname: "Goel",
//     address:{
//         city: "Ghaziabad",
//         country: "India"
//     }
// };

// let a = user.firstname;
// console.log(a)

// let b = user.address.city
// console.log(b)

// let{firstname: fn, lastname: ln, address:{city, country}} = user

// console.log(fn, ln)
// console.log(city)

// let number = [1,2,3,4,5]
// let [a,b,c,,e] = number
// console.log(c)
// console.log(e)

// let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White", "Pink"];
// let [a,b,c,d,e,f,g] = colors
// console.log(f,g)

// const student = {
//     name: "Pratik",
//     age: 19,
//     city: "Aligarh"
// };

// function showStudent({name, age, city}){
//     console.log("Name:", name);
//     console.log("Age:", age);
//     console.log("City:", city);
// }

// showStudent(student)


// =========== CASE STUDY ==========

// const student = {
//     id: 188,
//     name: " Pratik",
//     course: "BTech",
//     Address:{
//         city: "Aligarh",
//         country: "India"
//     },
//     marks: [98, 95, 86, 57],
//     admissionstatus: "Confirmed"
// };

// function displayData({id, name, course, Address: {city, country}, marks, admissionstatus}){
//     let sum = 0
//     for(let i=0; i<marks.length; i++){
//         sum+=marks[i]
//     }
//     let average = sum/marks.length;
//     console.log("Average:",average);
//     console.log("id:", id);
//     console.log("Name:", name);
//     console.log("Course:", course);
//     console.log("City:", city);
//     console.log("Country:", country);
    
//     if(average>=80 && admissionstatus=="Confirmed"){
//         console.log("Eligible for Merit Scholarship");
//     } else {
//         console.log("Regular Admission");
//     }
// }

// displayData(student)

// ------------------ Greatest of three numbers using anonymous function -------------------------

// const greatest = function(a, b, c){
//     max = a
//     if(b>max)
//         max = b
//     if(c>max)
//         max = c
//     return max
// }

// console.log("Greatest no. :", greatest(25,12,10))

// -------------- Write program to find sum of even numbers of given array ----------------------

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
// const sum = function(num){
//     let ans = 0
//     for(let i=0; i<num.length; i++){
//         if(num[i]%2==0){
//             process.stdout.write(num[i] + " ")
//             ans += num[i]*num[i]
//         }
//     }
//     console.log()
//     return ans
// }
// console.log("Sum of sq of even numbers =",sum(arr))


// --------------- Spread Operator ------------------
// oldarray = [1,2,3,4,5]
// newarray = [...oldarray,"Ram", "Shyam", 6,7,8,9]
// console.log(newarray)


// function add(a,b,c){
//     return a+b+c
// }
// numbers = [1,2,3]
// console.log(add(...numbers))

// ----- Merging student lists

// const csStudents = ["Akash", "Ashish", "Naresh"]
// const itStudents = ["Rahul", "Raman", "Shyam"]
// const allStudents = [...csStudents, ...itStudents];
// console.log(allStudents)

// const sum = (...num) => {
//     let ans = 0
//     num.forEach(n=>{
//         ans+=n
//     });
//     console.log(ans)
// };
// sum(1,2,3,4,5,6,7,8)

// function showDetails(name, ...skills){
//     console.log(name);
//     console.log(skills);
// }

// showDetails("Akash", "JS", "Dart", "Java")

// --------------- Default Values -------------

// let marks = [80]; 
// let [math = 0, science = 0] = marks; 
// console.log(math); 
// console.log(science);

// let data = []; 
// let [a = 10, b = 20] = data; 
// console.log(a); 
// console.log(b);

// let data = [0, null];
// let [a = 10, b = 20] = data;
// console.log(a);
// console.log(b);

let product = {
name: "Laptop"
};
let { name, price = 0 } = product;
console.log(name);
console.log(price);