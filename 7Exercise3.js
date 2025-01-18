// a.) Remove first company name 
// b.) Remove Uber & Ola in its place 
// c.) Add Amazon at the end

var companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("Company name : ",companies);

companies.shift();
console.log("a.) Remove first company name : ",companies);

companies.splice(1,1,"Ola");
console.log("b.) Remove Uber & Ola in its place : ",companies);

companies.push("Amazon");
console.log("c.) Add Amazon at the end : ",companies);
