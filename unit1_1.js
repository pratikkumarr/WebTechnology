// Pratik Kumar
// CS 4C
// Univ Roll No.: 2400290120187

// --- a ----------

const sum = (...num) => {
    let ans = 0
    num.forEach(n=>{
        ans+=n
    });
    console.log(ans)
};
sum(1,2,3,4,5,6,7,8)

// --- b ----------
oldarray = [1,2,3,4,5]
newarray = [...oldarray,"Ram", "Shyam", 6,7,8,9]
console.log(newarray)

// --- c ----------
const student = {
    name: "Pratik",
    age: 19,
    city: "Aligarh"
};

const copy = {...student};
console.log(copy)

const updated = {
    ...student,
    age: 20
};

console.log(updated)

// --- d ----------
const add = (a,b,c) => a+b+c
const arr = [10,20,30]
console.log(add(...arr))