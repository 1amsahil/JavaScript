// async function :- Always return a promise.
// await :- it pauses the execution  of its surrounding async function until the promise is settled.

function getData(data)
{
    return new Promise((resolve,reject) => {
        
        setTimeout(() =>
        {
            reject("Denied");
            console.log("Data : ",data);
        },2000)
    })
};

async function getAllData()
{
    console.log("getting data ....");
    await getData(1);
    console.log("getting data ....");
    await getData(2);
    console.log("getting data ....");
    await getData(3);
    console.log("getting data ....");
    await getData(4);
}