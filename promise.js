// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Doing Asynchronous Tasks")
//         resolve()
//     }, 2000);
// })

// promiseOne.then(function(){
//     console.log("Promise Executed")
// })

// -----------------------------------------------------------------

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Doing Asynchronous Tasks")
//         resolve()
//     }, 2000);
// }).then(function(){
//     console.log("Promise Executed")
// })

// -------------------------------------------------------------------

// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Doing Asynchronous Operations")
//         resolve({username: "Ramesh", id: 111})
//     }, 2000);
// })

// const u2 = promiseOne.then(function(u1){
//     console.log(u1)
//     return u1.username
// })

// u2.then(function(u3){
//     console.log(u3)
// })

// ---------------------------------------------------------------------

// const promiseOne = new Promise(function(resolve, reject){
//     let error = true
//     if(!error){
//         resolve({username:"Ramesh", id: 123})
//     } else {
//         reject("Something went wrong")
//     }
// });

// promiseOne.then(function(u1){
//     console.log(u1)
//     return u1.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(err){
//     console.log(err)
// }).finally(()=>{
//     console.log("All operations executed")
// })


// ------------------------------------------------------
// Pratik Kumar
// CS 4C
// 2400290120187
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username: "Ramesh", pass: 123})
//         } else {
//             reject("Something went wrong")
//         }
//     }, 3000)
// })

// async function consumepromiseOne(){
//     try{
//         const response = await promiseOne
//         console.log(response)
//     } catch(error){
//         console.log(error)
//     }
// }
// consumepromiseOne()

// --------------------------------------------------------
// Pratik Kumar
// CS 4C
// 2400290120187

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        
        if(!error){
            resolve("success");
        } else {
            reject("Something went wrong");
        }
    }, 2000);
});

promiseOne.then(function(message){
        console.log("Success:", message);
    })
    .catch(function(error){
        console.log("Error:", error);
    });
