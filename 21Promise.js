// Promise :- it is for eventual completion of task. It is an object in JS.
//            it is a solution to callback hell.
 
/*              Promise

let pro = new Promise( (resolve, reject) => {

    console.log("I am a Promise");

    resolve("success");
    reject("Rejected due to Error");
});

*/

//  Promise Apply on a Function

function getData(dataId, getNextData)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data Id :",dataId);
            resolve("success");
            if(getNextData)
            {
                getNextData();
            }

        },4000)
    })
}

getData(1,() => {
    getData(2,() => {
        getData(3);
    });
})
