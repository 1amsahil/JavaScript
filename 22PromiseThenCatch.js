// Promise then() & catch()

function getPromise ()
{
    return new Promise((resolve, reject) => {
        console.log("i am a Promise");
        // resolve("Successully resolve");
        reject("Error Occur");
    })
}

let promise = getPromise();

promise.then(() => { // then is for resolve
    console.log(`Promise Fulfilled`);
})

promise.catch(() => {  // catch is for reject
    console.log(`Rejected`);  
})


// Promise Chaining

function getData(dataId)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataId);
            resolve("Success");
        },2000)
    })
};

// getData(1).then( (res) => {
//     console.log(res);
// });
// getData(2).then( (res) => {
//     console.log(res);
// });

// Short way
getData(1)
.then(() => {
    return getData(2);
})
.then(() =>{
    return getData(3);
})
.then((res) =>{
    console.log(res)
})