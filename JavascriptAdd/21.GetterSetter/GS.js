// JavaScript Getter and Setter

// In JavaScript, there are two kinds of object

// Data properties
// Accessor properties

// Data Property

{
    // const student = {

    //     // data property
    //     firstName: 'Monica',
    // }
}

// Accessor Property

{
    // In JavaScript, accessor properties are methods that get or set the value of an object.
    // get - to define a getter method to get the property value
    // set - to define a setter method to set the property value
}

// JavaScript Getter

{
    // // In JavaScript, getter methods are used to access the properties of an object.

    // const student = {

    //     // data property
    //     firstName: 'Monica',
        
    //     // accessor property(getter)
    //     get getName() {
    //         return this.firstName;
    //     }
    // };
    
    // // accessing data property
    // console.log(student.firstName);
    
    // // accessing getter methods
    // console.log(student.getName);
    
    // // trying to access as a method
    // console.log(student.getName());
}

// a getter method getName() is created to access the property of an object.

{
    // get getName() {
    //     return this.firstName;
    // }
    // // To create a getter method, the get keyword is used.

    // // And also when accessing the value, we access the value as a property.

    // {
    //     student.getName;
    // }

    // // When you try to access the value as a method, an error occurs.

    // {
    //     console.log(student.getName()); // error
    // }
}

// JavaScript Setter

// In JavaScript, setter methods are used to change the values of an object.

{
    // const student = {
    //     firstName: 'Monica',
        
    //     //accessor property(setter)
    //     set changeName(newName) {
    //         this.firstName = newName;
    //     }
    // };
    
    // console.log(student.firstName); // Monica
    
    // // change(set) object property using a setter
    // student.changeName = 'Sarah';
    
    // console.log(student.firstName); // Sarah
}

// JavaScript Prototype

{
    // // In JavaScript, every function and object has a property named prototype by default.

    // function Person () {
    //     this.name = 'John',
    //     this.age = 23
    // }
    
    // const person = new Person();
    
    // // checking the prototype value
    // console.log(Person.prototype);

    // // In the above example, we are trying to access the prototype property of a Person constructor function.

    // // Since the prototype property has no value at the moment, it shows an empty object { ... }.
}

// JavaScript Symbol

// The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique.

{
    // // two symbols with the same description

    // const value1 = Symbol('hello');
    // const value2 = Symbol('hello');

    // console.log(value1 === value2); // false

    // // Though value1 and value2 both contain the same description, they are different.
}

// Creating Symbol

{
    // // You use the Symbol() function to create a Symbol.

    // // creating symbol
    // const x = Symbol()

    // typeof x;

    // // You can pass an optional string as its description. 

    // {
    //     const x = Symbol('hey');
    //     console.log(x);
    // }

    // // Access Symbol Description
    // // To access the description of a symbol, we use the . operator. 

    // {
    //     const x = Symbol('hey');
    //     console.log(x.description);
    // }
}

// Add Symbol as an Object Key

// You can add symbols as a key in an object using square brackets [].

{
    // let id = Symbol("id");

    // let person = {
    //     name: "Jack",

    //     // adding symbol as a key
    //     [id]: 123
    // };

    // console.log(person);
}

// Symbols are not included in for...in Loop.

// The for...in loop does not iterate over Symbolic properties.

{
    // let id = Symbol("id");

    // let person = {
    //     name: "Jack",
    //     age: 25,
    //     [id]: 12
    // };

    // // using for...in
    // for (let key in person) {
    //     console.log(key);
    // }
}

// Benefit of Using Symbols in Object

{
    // let person = {
    //     name: "Jack"
    // };
    
    // // creating Symbol
    // let id = Symbol("id");
    
    // // adding symbol as a key
    // person[id] = 12;

    // {
    //     let person = {
    //         name: "Jack"
    //     };
        
    //     // using string as key
    //     person.id = 12;
    //     console.log(person.id);
        
    //     // Another program overwrites value
    //     person.id = 'Another value';
    //     console.log(person.id);
    // }
}

// keyFor()	Returns a shared symbol key from the global symbol registry.

{
    // // get symbol by name
    // let sym = Symbol.for('hello');
    // let sym1 = Symbol.for('id');

    // // get name by symbol
    // console.log( Symbol.keyFor(sym) ); 
    // console.log( Symbol.keyFor(sym1) ); 
}