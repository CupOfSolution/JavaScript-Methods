/*
FIND Methods

-- Array Method is a kind of loop. Without array method we can use a for loop. It will start looping through every array element.

-- Here, it will return only the first found element. It will not return multiple elements. 
   EX:-- ((i) => i === 'Mango' || i === 'Orange)  It will never Return 2nd element.

-- ((i) => i === 'Mango') means: In here, I am declaring a function as a parameter. This is an arrow function, and it will 
   start looping through each element in the fruit array.

-- findIndex -- It will give only the index of the elements.
*/
const fruits = ['Banana', 'Orange', 'Mango', 'Mango']
const result = fruits.find((i) => i === 'Mango' || i === 'Orange');
const resultIndex = fruits.findIndex((i) => i === 'Mango');

console.log(result)         // Output: Mango
console.log(resultIndex)    // Output: 2