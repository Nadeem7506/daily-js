// Q1 Print hello world

// function print() {
//     return  "hello world";
// }
// console.log(print())

// Q2 Add two numbers

// function add(a, b) {
//     return a + b;
// }
// console.log(add(7, 8))

// Q3 Find the square root

// function square(num) {
//  return num **2;
// }
// console.log(square(2));

// Q4 Calculate area of TRAINGLE

// function a(1, 2, 3, 4) {
//  return Math.sqrt(a*(a*1))
// }

// Q5 Swap two variables

// let a = 1;
// let b = 2;

// let c = a;
//  a = b;
//  b = c;
//  console.log(`${a} ${b}`);

// Q6 Generate a random number

// function random() {
//     let a = Math.floor(Math.random()* 6)
//     return a
// }
// console.log(random())

// Q7 Check number is popsitive, Negative, zero

// function n(num) {
//     if (num >=1) {
//         console.log("positive");
//     } else if(num <=0 ) {
//         console.log("zero");
//     } else if(num >1 && num <= 0) {
//       console.log("Negative");
//     }
// }
// n(-1)

//  Q8 print Even and odd

// const num = [1,2,3,4,5,6,7,8,9,10];
// function name(num) {
//     let Even = [];
//     let odd = []
//  num.forEach(el => {
//     if(el % 2 === 0) {
//         Even.push(el)
//     } else {
//         odd.push(el)
//     }
//  });
//  return odd;
// }
// console.log(name(num));

// Q 9 Countvowels

// function countV(str) {
//  let count = 0;
//  for(let char of str) {

//    if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//    ){

//        count++;

// }

//  }
//  return count;
// }

// 2 Way with arrow function

// const countVow = (str) => {
//     let count = 0;
//     for(let char of str) {

//       if (
//        char === "a" ||
//        char === "e" ||
//        char === "i" ||
//        char === "o" ||
//        char === "u"
//       ){

//           count++;

//    }

//     }
//     return count;
//    }

//    3rd Way countv

// let arr = ["pune", "Delhi", "mumbai", "Dubai"];

// arr.forEach((val, idx, arr) => {
//     console.log(val.toLowerCase(), idx, arr);
// })

// q 10 find square
// let num = [1,2,3,4,5];

// num.forEach((num) => {
//     console.log(num * num);
// })

// Q 11 check prime Number

// function prime(num)  {
//     if(num === 1) {
//     return  false;
//     }
//    else if(num === 2) {
//    return true;
//    } else {
//         for(let i = 2; i < num; i++) {
//             if(num % i === 0) {

//          return false;

//             }
// }
// return true;

// }
// }

//  console.log(prime(8));

// Q 12 Multiplication table
//  for(let i = 1; i <= 10; i++) {
//       const nums =   i * 2;
//      console.log(`2 x ${i} = ${nums}`);
//     }

// Q 13 Find the largest number
// const nums1 = parseFloat(prompt("Enter a number"))
// const nums2 = parseFloat(prompt("Enter a number"))
// const nums3 = parseFloa33t(prompt("Enter a number"))
// let largest;
// if(nums1 >=nums2 && nums1 >= nums3) {
//     largest = nums1;
// } else if(nums2 >= nums1 && nums2 >= nums3) {
//     largest = nums2;
// } else {
//     largest = nums3;

// }
// console.log("The largest is " + largest);

// Q 14 display the sum of natural numbers

// const numbers = parseInt(prompt("Enter a positive number"));

// let sum = 0;
//  for(let i = 1; i <=numbers; i++) {
//     sum +=i;
//  }
//  console.log(`natural number:`, sum);

// Q 15 sort words in Alphabetical order

// const string = prompt("enter a sentence");
//   let words = string.split(" ");
//  words.sort();
//  console.log(`the sorted words are`);

//  for (const element of words) {
//     console.log(element);
//  }

// Q16 replace a string
// const str = 'hello my is ramzan';

// let name = str.replace('ramzan', 'nadeem')
// console.log(name);

// Q17 guess a random number

//Question & answer//

//1. reverse string//

// let array ='heelo world'

// function reversArr(array) {
//   return array.map((e)=> e.split('').reverse().join('')) 
  
// }
// console.log(reversArr(array));

// 1. reverse a string //

// function check(str) {
//   return str.split('').reverse().join('')
// }
// console.log(check("Nadeem"))



//2. palidrome //

// function palidromeCheck (str) {
//   let result = str.toUpperCase()
//    .split('').reverse().join('')

//   if(str.toUpperCase() === result) {
//     console.log("true")
//   } else {
//     console.log("false");
    
//   }
// }

// console.log(palidromeCheck("madam"))

// 3. remove duplicate values from array//



// function check(arr) {
//      arr.filter((val) => {
//     console.log(val);
//     // if( result === arr.filter ) {
//     //   return true
//     // } else {
//     //   return false
//     // }
    
//   })
// }

// console.log(check([1,2,2,3,4,5,5,6,7]))




// echo "# javascript-q-a" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Nadeem7506/javascript-q-a.git
// git push -u origin main