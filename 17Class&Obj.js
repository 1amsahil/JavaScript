// Object :-
// A javascript object is an entity having state and behavior(properties & method).
// JS objects have a special property called prototype.

console.log("1.) Object :- ");

const obj = {
    fullName : "Mohd Sahil" , // State
    marks : 90,
    
    // Behavior or Method
    printInfo : function (){ 
        console.log("Information :- Name :",this.fullName,"| Marks :",this.marks);
    },
    
    // 2nd Way of Declaring Behavior/Methods 
    printDetail()
    {
        console.log("Detail :- Name :",this.fullName,"| Marks :",this.marks);
    },
    
    // 3rd Way by using Arrow Function
    print : () => {
        console.log("Print :- Name :",this.fullName,"| Marks :",this.marks);
    }
}

obj.printInfo();
obj.printDetail();

// Prototype :-
console.log("1.1) Prototype :- ");

const company = {
    calcTax ()
    {
        console.log("Tax rate is 10% ");
    }
};

const employee = {
    fullName : "Mohd Sahil"
};

// Prototype added
employee.__proto__ = company;
console.log("In employee object prototype company's calcTax method is Added : ",employee);

employee.calcTax();


// Class 
console.log("2.) Class :-");

class LandRover
{
    constructor(model)
    {
        console.log("Object Created!", model);
    }

    start()
    {
        console.log("a.) Engine Start!");
    }

    stop()
    {
        console.log("b.) Engine Stop!");
    }
}

 let discovery = new LandRover("Discovery 110");
 discovery.start();
 discovery.stop();

