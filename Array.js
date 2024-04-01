/*
Find Methods---------------------
-- Array Method is a kind of loop. Without array method we can use a for loop. It will start looping through every array element.

-- Here, it will return only the first found element. It will not return multiple elements. 
   EX:-- ((i) => i === 'Mango' || i === 'Orange)  It will never Return 2nd element.

-- ((i) => i === 'Mango') means: In here, I am declaring a function as a parameter. This is an arrow function, and it will 
   start looping through each element in the fruit array.

-- findIndex -- It will give only the index of the elements.
*/
const FindFruits = ['Banana', 'Orange', 'Mango', 'Apple']
const FindResult = FindFruits.find((i) => i === 'Mango');
const FindResultIndex = FindFruits.findIndex((i) => i === 'Mango');

console.log(`Find methods -- ${FindResult}`)         // Output: Mango
console.log(FindResultIndex)                         // Output: 2


/*
Filter Methods------------------
-- The filter method creates a new array with all elements that pass the test implemented by the provided function.

-- Here, it will return multiple elements in a array. 
*/
const FilterFruits = ['Banana', 'Orange', 'Mango', 'Apple']
const FilterResult = FilterFruits.filter((i) => i === 'Mango');
const FilterMultipleResult = FilterFruits.filter((i) => i === 'Mango' || i === 'Apple');

console.log(`Filter Methods -- ${FilterResult}`)         // Output: ['Mango']
console.log(FilterMultipleResult)                       // Output: ['Mango', 'Apple']


/*
Slice Methods------------------
-- The filter method creates a new array with all elements that pass the test implemented by the provided function.

-- Here, it will return a new array containing multiple elements from the original array. 
   Example: fruits.slice(2, 4) will return ['Mango', 'Apple'].

-- slice(2, 4) Means: slice(Start index, before end index)

-- The first parameter (2) specifies the start index (inclusive), and the second parameter (4) specifies the end index (exclusive).
*/
const SliceFruits = ['Banana', 'Orange', 'Mango', 'Apple']
const SliceResult = SliceFruits.slice(2, 4);

console.log(`Slice method -- ${SliceResult}`)         // Output: ['Mango', 'Apple']


/*
Splice Methods-------------------
-- It can change the main array.

-- splice(2, 4) Means: splice(index, noOfRemovedItems, aditional element)

-- const result = fruits.splice(1, 4, 'fruit'): Using the splice method to remove 4 elements starting from index 1 and replace them with 'fruit'.

-- const result = fruits.splice(1, 4): Here, the splice(1, 4) method removes elements starting from index 1 and removes 4 elements from the array.
   Example: fruits.splice(1, 4) will remove 'Orange', 'Mango', and 'Apple' from the array.
*/
const SpliceFruits = ['Banana', 'Orange', 'Mango', 'Apple']
const SpliceResult = SpliceFruits.splice(1, 4);

console.log(`Splice method -- ${SpliceResult}`)         // Output: ['Orange', 'Mango', 'Apple']
console.log(SpliceFruits)                               // Output: ['Banana']


/*
Concat Methods-------------------
-- The concat method is used to merge two or more arrays together, creating a new array without modifying the original arrays.

-- It can't change the main array.

-- Here, fruits.concat('Fruit') creates a new array by appending the string 'Fruit' to the end of the fruits array.
*/
const ConcatFruits = ['Banana', 'Orange', 'Mango', 'Apple'];
const ConcatResult = ConcatFruits.concat('Fruit');

console.log(`Concat method -- ${ConcatResult}`); // Output: ['Banana', 'Orange', 'Mango', 'Apple', 'Fruit']


/*
Push Methods-------------------
-- It can change the main array. Modifies the original array by appending elements.

-- Syntax: array.push(element1[, ...[, elementN]])

-- Example: PushFruits.push('Fruit') returns the new length of the array.
*/
const PushFruits = ['Banana', 'Orange', 'Mango', 'Apple'];
const PushResult = PushFruits.push('Fruit');

console.log(`Push method -- ${PushResult}`); // Output: 5
console.log(PushFruits);                     // Output: ['Banana', 'Orange', 'Mango', 'Apple', 'Fruit']


/*
Reduce Methods-------------------
- Iterates over an array and reduces it to a single value.
- Syntax: array.reduce(callbackFn[, initialValue])

- Example:
  - ReduceNumber.reduce((total, currValue) => total + currValue, 0)
    - Adds up all the numbers in the array starting from an initial value of 0.

*/
const ReduceNumber = [1, 2, 3, 4, 5];
const ReduceResult = ReduceNumber.reduce((total, currValue) => total + currValue, 0);

console.log(ReduceResult); // Output: 15
