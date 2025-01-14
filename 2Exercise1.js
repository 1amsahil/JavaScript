// Divide by 5
var num = prompt("Enter a number : ");

if(num%5==0)
{
    alert("Yes, it is muliple of 5 ");
}
else
{
    alert("No");
}

// Grade System

var mark = prompt("Enter Marks : ")
var grade;

if( mark>=80 && mark<=100)
{
    grade = "A";
}
else if( mark>=70 && mark<=79)
{
    grade = "B";
}
else if( mark>=60 && mark<=69)
{
    grade = "C";
}
else if( mark>=50 && mark<=59)
{
    grade = "D";
}
else if( mark>=0 && mark<=49)
{
    grade = "F";
}

let div = document.createElement("div");
div.innerHTML = `Grade : ${grade}`;
div.setAttribute("class","marksGrade");

document.querySelector(".topic").append(div)