// CallBack
console.log("1.) CallBack :- ");

function sum (a,b){
    console.log("Sum :-",a+b);
}

function calculator(a,b,sumCallBack)
{
    sumCallBack(a,b);
}

calculator(2,3,sum);

// CallBack Function with SelfCall
console.log("2.) CallBack With SelfCall :- ");

function getData(dataId, getNextData)
{
    setTimeout(() => {

        console.log("Id : ",dataId);
        if(getNextData)
        {
            getNextData();
        }
    },2000)
}

// Note : CallBack Hell :- Nested CallBacks Stacked below one another forming a pyramid structure (Pyramid Of Doom).              
getData(1, () => {      
    getData(2, () => {
        getData(3,() => {
            getData(4);
        });
    })
});

