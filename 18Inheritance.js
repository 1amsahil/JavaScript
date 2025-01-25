class Parent
{
    info()
    {
        console.log("Information from Parent Class");
    }
}

class Child extends Parent
{

}

let ch = new Child();
ch.info();

// Note :- if we want to access the Child constructor, First we have to create a Parent constructor by using Super keyword.

class Person 
{
    constructor()
    {
        console.log("Person Object Created.");
    }
    eat()
    {
        console.log("eating");
    }
}

class Engineer extends Person
{
    constructor()
    {
        console.log("Engineer Object Created.");
        super(); // to invoke parent class constructor
    }
    work()
    {
        super.eat() // to access the parent class methods
        console.log("Working")
    }
};

let eng = new Engineer();
eng.work();
