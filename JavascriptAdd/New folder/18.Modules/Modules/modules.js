// JavaScript Modules

// As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.

// Module is a file that contains code to perform a specific task. A module may contain variables, functions, classes etc.

{
    // // exporting a function
    // export function greetPerson(name) {
    // return `Hello ${name}`;
    // }
    // {
    //     // importing greetPerson from greet.js file
    //     import { greetPerson } from './greet.js';

    //     // using greetPerson() defined in greet.js
    //     let displayName = greetPerson('Jack');

    //     console.log(displayName); // Hello Jack
    // }
    
}

// Export Multiple Objects

// It is also possible to export multiple objects from a module.
{
    // // exporting the variable
    // export const name = 'JavaScript Program';

    // // exporting the function
    // export function sum(x, y) {
    //     return x + y;
    // }

    // {
    //     import { name, sum } from './module.js';

    //     console.log(name);
    //     let add = sum(4, 9);
    //     console.log(add); // 13
    // }
}

// Renaming imports and exports

{
    // // Rename in the module (export file)

    // // renaming import inside module.js
    // export {
    //     function1 as newName1,
    //     function2 as newName2
    // };

    // // when you want to use the module
    // // import in the main file
    // import { newName1, newName2 } from './module.js';
}

// Rename in the import file

{
    // // inside module.js
    // export {
    //     function1,
    //     function2
    // };

    // // when you want to use the module
    // // import in the required file with different name

    // import { function1 as newName1, function2 as newName2 } from './module.js';
}

// Default Export

// You can also perform default export of the module.

{
    // // default export
    // export default function greet(name) {
    //     return `Hello ${name}`;
    // }

    // export const age = 23;
    // {
    //     import random_name from './greet.js';
    // }
}

// Modules Always use Strict Mode

{
    // // By default, modules are in strict mode.
    // {
    //     // in greet.js
    // function greet() {
    //     // strict by default
    // }

    // export greet();
    //     }
}

    // Benefit of Using Module
    // The code base is easier to maintain because different code having different functionalities are in different files.
    // Makes code reusable. You can define a module and use it numerous times as per your needs.
    // The use of import/export may not be supported in some browsers.