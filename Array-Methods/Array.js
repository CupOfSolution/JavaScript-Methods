// /*
// Find Methods---------------------
// -- Array Method is a kind of loop. Without array method we can use a for loop. It will start looping through every array element.

// -- Here, it will return only the first found element. It will not return multiple elements. 
//    EX:-- ((i) => i === 'Mango' || i === 'Orange)  It will never Return 2nd element.

// -- ((i) => i === 'Mango') means: In here, I am declaring a function as a parameter. This is an arrow function, and it will 
//    start looping through each element in the fruit array.

// -- findIndex -- It will give only the index of the elements.
// */
// const fruits = ['Banana', 'Orange', 'Mango', 'Apple']
// const result = fruits.find((i) => i === 'Mango');
// const resultIndex = fruits.findIndex((i) => i === 'Mango');

// console.log(result)         // Output: Mango
// console.log(resultIndex)    // Output: 2


// /*
// Filter Methods------------------
// -- The filter method creates a new array with all elements that pass the test implemented by the provided function.

// -- Here, it will return multiple elements in a array. 
// */
// const fruits = ['Banana', 'Orange', 'Mango', 'Apple']
// const result = fruits.filter((i) => i === 'Mango');
// const MultipleResult = fruits.filter((i) => i === 'Mango' || i === 'Apple');

// console.log(result)         // Output: ['Mango']
// console.log(MultipleResult) // Output: ['Mango', 'Apple']
