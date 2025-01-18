// For Each Method
city = ["Delhi","UK","Mumbai"];

city.forEach(function cityPrint(val)
{
     console.log(val);
});
    
// ForEach with Arrow Function :-
city.forEach( (val) => {
    console.log(val);
})

// eg :- Squaring of Number using For Each Method

square = [1,2,3,4,5];
square.forEach( (val,idx) => {
    square[idx] = val*val;
})

console.log(square);
