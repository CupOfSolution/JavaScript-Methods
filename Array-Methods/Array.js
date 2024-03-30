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


// /*
// Slice Methods------------------
// -- The filter method creates a new array with all elements that pass the test implemented by the provided function.

// -- Here, it will return a new array containing multiple elements from the original array. 
//    Example: fruits.slice(2, 4) will return ['Mango', 'Apple'].

// -- slice(2, 4) Means: slice(Start index, end index)

// -- The first parameter (2) specifies the start index (inclusive), and the second parameter (4) specifies the end index (exclusive).
// */
// const fruits = ['Banana', 'Orange', 'Mango', 'Apple']
// const result = fruits.slice(2, 4);

// console.log(result)         // Output: ['Mango', 'Apple']


/*
Splice Methods------------------
-- It can change the main array.

-- splice(2, 4) Means: splice(index, noOfRemovedItems, aditional element)

-- const result = fruits.splice(1, 4, 'fruit'): Using the splice method to remove 4 elements starting from index 1 and replace them with 'fruit'.

-- const result = fruits.splice(1, 4): Here, the splice(1, 4) method removes elements starting from index 1 and removes 4 elements from the array.
   Example: fruits.splice(1, 4) will remove 'Orange', 'Mango', and 'Apple' from the array.
*/
const fruits = ['Banana', 'Orange', 'Mango', 'Apple']
const result = fruits.splice(1, 4);

console.log(result)         // Output: ['Orange', 'Mango', 'Apple']
console.log(fruits)         // Output: ['Banana']
