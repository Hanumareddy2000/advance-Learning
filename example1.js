//---------Two Dimentional Array--------------
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   console.log(matrix[1][2]); 
  

//   matrix[0][0] = 0;
//   console.log(matrix[0][0]);
  

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       console.log(matrix[i][j]);
//     }
//   }
  
// ---------DOM Events---------------
//   const button = document.getElementById('myButton');
//   button.addEventListener('click', function() {
//       alert('Button was clicked!');
//   });

//   const list = document.getElementById('myList');
//   list.addEventListener('click', function(event) {
//       if (event.target.tagName === 'LI') {
//           alert('List item clicked: ' + event.target.textContent);
//       }
//   });

//   --------flatten an array---------------
// const nestedArray = [1, [2, [3, 4], 5], 6];

// const flattenArray = (arr) => {
//   const result = [];
//   arr.forEach(val => {
//     if (Array.isArray(val)) {
//       result.push(...flattenArray(val)); 
//     } else {
//       result.push(val);
//     }
//   });
//   return result;
// };

// console.log(flattenArray(nestedArray)); 


// --------DOM traversal--------------
// const firstChild = document.getElementById('first');
        

// const parent = firstChild.parentNode;
// console.log('Parent:', parent.id); 


// const secondChild = firstChild.nextElementSibling;
// console.log('Next Sibling:', secondChild.id); 
// const lastChild = parent.lastElementChild;
// console.log('Last Child:', lastChild.id); 

// const thirdChild = lastChild.previousElementSibling;
// console.log('Previous Sibling:', thirdChild.id);


// -----------sort Array of ojects---------
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 20 },
//   ];
  

//   people.sort((a, b) => a.age - b.age);
//   console.log('Sorted by age (ascending):', people);
  
//   people.sort((a, b) => a.name.localeCompare(b.name));
//   console.log('Sorted by name (alphabetical):', people);
  

//   ----------Filter Array of objects-----------
// const people1 = [
//     { name: 'Alice', age: 25, city: 'New York' },
//     { name: 'Bob', age: 30, city: 'Los Angeles' },
//     { name: 'Charlie', age: 20, city: 'New York' },
//     { name: 'David', age: 35, city: 'Chicago' },
//   ];
  
  
//   const adults = people1.filter(person => person.age >= 30);
//   console.log('Adults:', adults);
  
  
//   const newYorkers = people1.filter(person => person.city === 'New York');
//   console.log('New Yorkers:', newYorkers);
  
  
//   const youngNewYorkers = people1.filter(person => person.age < 30 && person.city === 'New York');
//   console.log('Young New Yorkers:', youngNewYorkers);
 

// // -------classes------
// class Vehicle {
//     constructor(make, model) {
//       this.make = make;
//       this.model = model;
//     }
  
//     info() {
//       return `${this.make} ${this.model}`;
//     }
//   }
  
//   class Car extends Vehicle {
//     constructor(make, model, doors) {
//       super(make, model); 
//       this.doors = doors;
//     }
  
//     carInfo() {
//       return `${this.info()} with ${this.doors} doors`;
//     }
//   }
  
//   const myCar = new Car('Toyota', 'Camry', 4);
//   console.log(myCar.carInfo()); 
  

// //   ---------Inheritence------------
// class Shape {
//     constructor(name) {
//       this.name = name;
//     }
  
//     area() {
//       return 0; 
//     }
  
//     info() {
//       return `This is a ${this.name}.`;
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(width, height) {
//       super('Rectangle');
//       this.width = width;
//       this.height = height;
//     }
  
//     area() {
//       return this.width * this.height; 
//     }
//   }
  
//   const rect = new Rectangle(10, 5);
//   console.log(rect.info()); 
//   console.log(`Area: ${rect.area()}`); 
  

//   --------memorization------------
// function memoize(fn) {
//     const cache = {};
  
//     return function(...args) {
//       const key = JSON.stringify(args);
  
//       if (cache[key]) {
//         console.log('Fetching from cache:', key);
//         return cache[key];
//       }
  
//       const result = fn(...args);
//       cache[key] = result;
//       console.log('Calculating result:', key);
//       return result;
//     };
//   }
  
//   function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
  
//   const memoizedFibonacci = memoize(fibonacci);
  
//   console.log(memoizedFibonacci(10)); 
//   console.log(memoizedFibonacci(20)); 

//   ------------Arrow Functions-------------
// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(num => num * 2);
// console.log(doubled); 

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); 

//--------------Prototype-------------
// class Animal {
//   constructor(name) {
//       this.name = name;
//   }

//   speak() {
//       console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//       console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog('Rex');
// dog.speak(); 


// -------------Destructuring-------------
// const person = { name: "Alice", age: 25 };

// const { name, age } = person;

// console.log(name);
// console.log(age); 
        //  -----(Nested object Destructuring)----
        // const person1 = { name: "Alice", address: { city: "Wonderland", zip: "1234" } };

        // const { name1, address: { city, zip } } = person1;        
        // console.log(name); 
        // console.log(city);
        // console.log(zip); 

 //------------Meta Characters--------------
//  let regex = /^a.*b$/;  
//  console.log(regex.test('abc'));   
//  console.log(regex.test('a123b')); 
//  console.log(regex.test('ab'));    
//  console.log(regex.test('aab'));   


//  ---------------Execution Context-------------
        //  global execution context
            //  var globalVar = "I'm a global variable";
             
            //  function greet() {
            //    console.log("Hello, world!");
            //  }
             
            //  greet(); 
            //  console.log(globalVar);  
        // function execution content
            //  function add(a, b) {
            //   var sum = a + b;
            //   console.log(sum);
            //   return sum;
            // }
            
            // add(5, 3);  
        // eval execution content
            // eval('var x = 10;');
            // console.log(x);  

//-------------- Event loop----------------
// console.log('Start');

// setTimeout(() => {
//   console.log('Macro: Timeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Micro: Promise 1');
// }).then(() => {
//   console.log('Micro: Promise 2');
// });

// console.log('End');


// ----------Lexical Scope----------------
// function outer() {
//   let outerVar = "I am from outer";

//   function inner() {
//     console.log(outerVar);  
//     }

//   return inner; 
// }

// const closureFunction = outer();  
// closureFunction();  


// ---------------pure function-----------
// function add(a, b) {
//   return a + b;  
// }

// console.log(add(2, 3)); 
// console.log(add(2, 3)); 


// ----------------impure function-------------
// let count = 0;

// function incrementCounter() {
//   count += 1;  
//   return count;
// }

// console.log(incrementCounter());  
// console.log(incrementCounter());  

// ----------Currying-------------
// function curriedAdd(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c;
//     };
//   };
// }
// const add5 = curriedAdd(5);  
// const add5And3 = add5(3);    
// const result = add5And3(2);  
// console.log(result);  

// ---------Object inheritance-------------
// class Vehicle {
//   constructor(type) {
//     this.type = type;
//   }

//   drive() {
//     console.log('Driving...');
//   }
// }

// class Car extends Vehicle {
//   constructor(type, make) {
//     super(type);  
//     this.make = make;
//   }

//   honk() {
//     console.log('Honk honk!');
//   }
// }

// const myCar = new Car('Sedan', 'Honda');
// myCar.drive();  
// myCar.honk();   


// ----------------Json---------------
//  const badJsonString = '{"name": "Alice", "age": 30';  

//  try {
//    const parsedObject = JSON.parse(badJsonString);
//    console.log(parsedObject);
//  } catch (error) {
//    console.log("Error parsing JSON:", error.message);
//  }
 

//  ----------------Recursion---------
// function factorial(n) {
  
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));  


// ----------Events----------
  // const button = document.getElementById('myButton');
  // button.addEventListener('click', () => {
  //   alert('Button clicked!');
  // });

  // ----------set time out function------------
  // function greet(name) {
  //   console.log("Hello, " + name + "!");
  // }
  
  // setTimeout(greet, 2000, "Alice");  
  

  // ----------MAP-----------
  // let myMap = new Map([
  //   ['name', 'Alice'],
  //   ['age', 25],
  //   ['city', 'New York']
  // ]);

  
  // ------------Filters-----------
  // const people = [
  //   { name: 'Alice', age: 25 },
  //   { name: 'Bob', age: 30 },
  //   { name: 'Charlie', age: 17 },
  //   { name: 'David', age: 21 }
  // ];
  
  // const adults = people.filter(person => person.age >= 18);
  
  // console.log(adults);
 

  // ------------------reduce-------------
//   const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);  

// console.log(sum);  


// ----------------find()---------
// const number = [5, 12, 8, 130, 44];

// const firstLargeNumber = number.find(number => number > 10);

// console.log(firstLargeNumber); 
     
      // -----------every()-----
      // const numbers1 = [2, 4, 6, 8];

      // const allEven = numbers1.every(number => number % 2 === 0);
      
      // console.log(allEven);  
      // -------------some()----------
      // const people1 = [
      //   { name: 'Alice', age: 30 },
      //   { name: 'Bob', age: 20 },
      //   { name: 'Charlie', age: 40 }
      // ];
      
      // const hasYoungPerson = people1.some(p => p.age < 25);
      
      // console.log(hasYoungPerson);  
      
      
// ---------------Spread operator-------------
// const obj1 = { name: "Alice", age: 25 };
// const obj2 = { age: 30, city: "Paris" };
// const mergedObj = { ...obj1, ...obj2 };  
// console.log(mergedObj);  


// ---------Default parameters---------
// function logMessage(message = 'Default message', ...otherArgs) {
//   console.log(message);
//   console.log(otherArgs);
// }

// logMessage('Hello!', 1, 2, 3);  
// logMessage();                   
  

// --------------forEach()---------
// const numbers = [10, 20, 30, 40];

// numbers.forEach(function(num, index, array) {
//   console.log(`Index: ${index}, Value: ${num}, Array: [${array}]`);
// });


// -----------------set-------------
          // ---------using add() method-------------
          // let mySet = new Set();
          // mySet.add(1);
          // mySet.add(2);
          // mySet.add(3);
          // mySet.add(2);  
          // console.log(mySet);  


// -------------Objects-------------
// const person = {
//   name: "Alice",
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// };

// person.greet();  


// ------------DOM Manipulation------------

  // const boxes = document.getElementsByClassName("box");
  // console.log(boxes);  


  // --------------Type conversion-----------
//   let num = 42;
// let str = num.toString();  
// console.log(str);  

// let bool = true;
// let str2 = String(bool);  
// console.log(str2);  

// -------------Arrays--------------
// let fruits = ["apple", "banana", "cherry"];
// fruits[1] = "blueberry";  
// console.log(fruits);  


// -------------Data Types------------
// let person = {
//   name: "Alice",
//   age: 30,
//   greet: function() { console.log("Hello!"); }
// };

// console.log(person.name);  
// person.greet();            


// -------------Default perameters------------
// function calculatePrice(price, taxRate = 0.1) {
//   return price + (price * taxRate);
// }

// console.log(calculatePrice(100));      
// console.log(calculatePrice(100, 0.2)); 

// ------------------Foreach()----------
// const fruit  = ["apple", "banana", "cherry"];

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });


// ------------callback function------------
// function greet(name) {
//   console.log('Hello, ' + name + '!');
// }
// function sayHello(callback) {
//   const name = 'Alice';
//   callback(name);
// }
// sayHello(greet);  


// // -------------call Back Functions-----------

//    function fetchData(callback) {
//      setTimeout(() => {
//          const data = { name: "John", age: 30 };
//          callback(data); 
//      }, 2000);
//    }

//   function processData(data) {
//     console.log("Data received:", data);
//   }

//   fetchData(processData);

// // ----------call stack-------
//   function greet(name) {
//     console.log("Hello, " + name);
//   }
//   function ask() {
//     const name = "Alice";
//     greet(name);
//     console.log("How are you, " + name + "?");
//   }
//   ask();


// // -----------Local Storage -------------

//   localStorage.setItem('username', 'Alice');
//   const username = localStorage.getItem('username');
//   console.log(username); 
//   localStorage.removeItem('username');
//   localStorage.clear();


// // ---------Session Storage-----------

//  sessionStorage.setItem('sessionId', '12345');

//  const sessionId = sessionStorage.getItem('sessionId');
//  console.log(sessionId);

//  sessionStorage.removeItem('sessionId');

//  sessionStorage.clear();

// // ---------sort Array of objects--------------
//   const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 20 }
//   ];

//   people.sort((a, b) => a.age - b.age);

//   console.log("Sorted by age:", people);

//   people.sort((a, b) => a.name.localeCompare(b.name));

//   console.log("Sorted by name:", people);


// // -----------Filter Array of objects-----------
//   const people1 = [
//         { name: 'Alice', age: 25, city: 'New York' },
//         { name: 'Bob', age: 30, city: 'Los Angeles' },
//         { name: 'Charlie', age: 20, city: 'New York' },
//         { name: 'David', age: 35, city: 'Chicago' },
//       ];
    
    
//       const adults = people1.filter(person => person.age >= 30);
//       console.log('Adults:', adults);
    
    
//       const newYorkers = people1.filter(person => person.city === 'New York');
//       console.log('New Yorkers:', newYorkers);
    
    
//      const youngNewYorkers = people1.filter(person => person.age < 30 && person.city === 'New York');
//      console.log('Young New Yorkers:', youngNewYorkers);

// // --------------Split method---------------
//         // --(usage with a String separator)--
//              const str = "Hello,World,JavaScript";
//              const result = str.split(","); 
//              console.log(result); 
//         // --(usage space as a separator)--
//              const str1 = "Hello World JavaScript";
//              const result1 = str1.split(" "); 
//              console.log(result1); 
//         // --(usage regular expression)--
//              const str2 = "one,two;three four";
//              const result2 = str2.split(/[,; ]+/); 
//              console.log(result2); 
        
// // --------------Join method--------------------
//         //  --(comma separator)--
//              const fruits = ["Apple", "Banana", "Cherry"];
//              const result3 = fruits.join();
//              console.log(result3);
//         //  --(custom separator)--
//              const fruits1 = ["Apple", "Banana", "Cherry"];
//              const result4 = fruits1.join("-");
//              console.log(result4);
//         //  --(join with a space)--
//              const fruits2 = ["Apple", "Banana", "Cherry"];
//              const result5 = fruits2.join(" ");
//              console.log(result5); 
//         //  --(comma separator)--
//              const fruits3 = ["Apple", "Banana", "Cherry"];
//              const result6 = fruits3.join("");
//              console.log(result6);   
//         //  --(comma separator)--
//              const fruits4 = [8,2,5,9];
//              const result7 = fruits4.join(",");
//              console.log(result7);
            


// ------------Template Strings-------------
let name = "Alice";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); 

// -----------Arrow functions---------
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds); 
  }, 1000);
}

const timer = new Timer(); 

// ------------for of loop----------
const numbers = [1, 2, 3, 4];

for (const num of numbers) {
  console.log(num);
}
     //  ------for in loop--------
     const person = { name: "Alice", age: 25, country: "USA" };
   
     for (const key in person) {
       console.log(`${key}: ${person[key]}`);
  }
 
 // ---------------Rest operator--------
 const arr = [1, 2, 3, 4, 5];

const [first, second, ...rest] = arr;

console.log(first);  
console.log(second); 
console.log(rest);  

// ----------Spread operator------------
const person1 = { name: "Alice", age: 25 };
const address = { country: "USA", city: "New York" };

const mergedObject = { ...person1, ...address };
console.log(mergedObject); 

// ------------Destructing-----------
const numbers1 = [1, 2, 3, 4, 5];

const [first1, second1, ...rest1] = numbers1;
console.log(first1);  
console.log(second1); 
console.log(rest1);   

// -------------Asynchronous------------
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched!");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.error(error);
  });


  // ----------Higher order function-----------
  // Higher-order function that takes a function as an argument
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function farewell() {
  console.log("Goodbye!");
}

greet("Alice", farewell);



