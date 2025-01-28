// IIFE ( Immediately Invoked Function Expression ) 
// :- it is a function that is called immediately as soon as it is defined.

// IIFE Function
(function()
{
    console.log("Normal IIFE");
})();

// Arrow IIFE
(() =>
{
    console.log("Arrow IIFE");
})();

// Async IIFE
(async () =>
{
    console.log("Async IIFE");
})();
