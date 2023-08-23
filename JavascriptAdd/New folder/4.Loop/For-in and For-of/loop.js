/* The For Of Loop */

/*

The for...of loop was introduced in the later versions of JavaScript ES6.

The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).

*/


{
    // for (variable of iterable) {
    //     // code block to be executed
    //   }
}


/*   iterable - an iterable object (array, set, strings, etc). */
/*   element - items in the iterable */

{
    /* for...of with Arrays */

    /* array */
    const students = ['John', 'Sara', 'Jack'];

    /* using for...of */
    for ( let element of students ) {

        /* display the values */
        console.log(element);
    }
}

{
    // // for...of with Strings
    // // string
    // const string = 'code';

    // // using for...of loop
    // for (let i of string) {
    //     console.log(i);
    // }
}

{
    // // for...of with Sets
    // // define Set
    // const set = new Set([1, 2, 3]);

    // // looping through Set
    // for (let i of set) {
    //     console.log(i);
    // }
}

{
    // // for...of with Maps
    // // define Map
    // let map = new Map();

    // // inserting elements
    // map.set('name', 'Jack');
    // map.set('age', '27');

    // // looping through Map
    // for (let [key, value] of map) {
    //     console.log(key + '- ' + value);
    // }
}


// The For In Loop

{
    // for (key in object) {
    //     // code block to be executed
    // }
}

// Iterate Through an Object

{
    // const student = {
    //     name: 'Monica',
    //     class: 7,
    //     age: 12
    // }
    
    // // using for...in
    // for ( let key in student ) {
    
    //     // display the properties
    //     console.log(`${key} => ${student[key]}`);
    // }
}

// Update Values of Properties

{
    // const salaries= {
    //     Jack : 24000,
    //     Paul : 34000,
    //     Monica : 55000
    // }
    
    // // using for...in
    // for ( let i in salaries) {
    
    //     // add a currency symbol
    //     let salary = "$" + salaries[i];
    
    //     // display the values
    //     console.log(`${i} : ${salary}`);
    // }
}

// You can also use for...in loop to iterate over string values.

{
    // const string = 'code';

    // // using for...in loop
    // for (let i in string) {
    //     console.log(string[i]);
    // }
}

// for...in with Arrays

{
    // // define array
    // const arr = [ 'hello', 1, 'JavaScript' ];

    // // using for...in loop
    // for (let x in arr) {
    //     console.log(arr[x]);
    // }

    // // You should not use for...in to iterate over an array where the index order is important.

    // // One of the better ways to iterate over an array is using the for...of loop.
}


