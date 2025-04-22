//Array: An array is a special variable that can store multiple values in one place.Each value has a number called an index, starting from 0.


const arr1 = [1,3,4,5,6,7,8]
// console.log(arr1[2]);

// methods

// arr1.push(9)
// arr1.push(10)//It add value in array in ending
// arr1.pop()// it delete value end in array
// arr1.unshift(4) // It Add value in Starting
// arr1.shift()     // It remove Stating vlaue
// console.log(`1. ${arr1}:`,"The Push Method is use:",arr1);//It Add Item in Array


//Slice , splice
console.log("A",arr1);

const myarr = arr1.slice(2,4)

console.log(myarr);
console.log("B",arr1);

const myarr2 = arr1.splice(2,4)
console.log("C",myarr);
console.log(myarr2);




