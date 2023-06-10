// Practice


// 1. If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// const input = [1, -4, 12, 0, -3, 29, -150];
// const input = [1, -4, 12, 0, -3, 29, -150];
// sum = 0;
// for(let i=0; i<input.length; i++){
//     if (input[i]>=0){
//         sum = sum+input[i]
//     }
// }
// console.log(sum);


// 2. Square the value of every element in the array. Presume that you will only get numbers in the input array.
// const input = [1, 2, 3, 4, 5];

// const input = [1, 2, 3, 4, 5];

// for(let i=0; i<input.length; i++){
//     console.log(input[i]*input[i])
// }
// 3. Calculate the mean and median values of the number elements from the input array.
// const input = [12, 46, 32, 64];

// mean
// const input = [12, 46, 32, 64];

// let sum =0;
// for(let i=0; i<input.length; i++){
//     sum = sum+input[i];
// }
// console.log(sum/input.length);



































// 4. Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.



// const input = [
//  {
//    name: "John",
//    age: 13,
//  },
//  {
//    name: "Mark",
//    age: 56,
//  },
//  {
//    name: "Rachel",
//    age: 45,
//  },
//  {
//    name: "Nate",
//    age: 67,
//  },
//  {
//    name: "Jennifer",
//    age: 65,
//  },
// ];

// let min = Math.min(...input.map((val)=> val.age))
// let max = Math.max(...input.map((val)=> val.age))

// console.log(max-min)
// console.log("minimum age : ", min)
// console.log("maximum age : " ,max)














// 5. If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.


// let num = 4;

// if(num<0){
//   console.log("It is a neg number")  
// }

// else if(num===1){
//     console.log(1)
// }
// else{
//     fact = 1;
//     for(let i=1; i<=num; i++){
//         fact = fact*i;
//     }
//     console.log(fact)
// }


