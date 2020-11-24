// # Debugging Exercises

// #### 4. Comparing Arrays
// Create a function that returns true if two arrays contain identical values, and false otherwise.

// Someone wrote the following code:
// ```javascript
// function compareArrays(arr1, arr2) {
//   if (arr1 === arr2) {
//     return true
//    } else {
//     return false
//    }
// }
// ```
// * Why doesn't the code work?
// * Fix the code (or restart) to solve the problem.

// * Examples of output
// * compareArrays([1, 2], [1, 3]) ➞ false
// * compareArrays([1, 2], [1, 2]) ➞ true
// * compareArrays([4, 5, 6], [4, 5, 6]) ➞ true
// * compareArrays([4, 7, 6], [4, 5, 6]) ➞ false


 const compareArrays = (arr3, arr4)=> { 
 let arr1 = arr3.flat(Infinity);
 let arr2 = arr4.flat(Infinity);
       if(arr3.length !== arr4.length) return false;
         else{
             for(let i = 0; i < arr1.length; i++){
              if(arr1[i] === arr2[i]) continue;
              else if(arr1[i]==arr2[i]) return false;
              else return false;
          } return true;
         } 
    }

    console.log(compareArrays([1, 2], [1, 3])) //➞ false
console.log(compareArrays([1, [2,[4,5]],3], [1, [2,[4,5]],3]))// ➞ true
console.log(compareArrays([4, 5, 6], [4, 5, 6]))// ➞ true
console.log(compareArrays([4, 7, 6], [4, 5, 6])) //➞ false 

