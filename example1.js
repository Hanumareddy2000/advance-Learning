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


// -------------call Back Functions-----------

function fetchData(callback) {
  setTimeout(() => {
      const data = { name: "John", age: 30 };
      callback(data); 
  }, 2000);
}

function processData(data) {
  console.log("Data received:", data);
}

fetchData(processData);

// ----------call stack-------
function greet(name) {
  console.log("Hello, " + name);
}

function ask() {
  const name = "Alice";
  greet(name);
  console.log("How are you, " + name + "?");
}

ask();


// -----------Local Storage -------------

localStorage.setItem('username', 'Alice');

const username = localStorage.getItem('username');
console.log(username); 

localStorage.removeItem('username');

localStorage.clear();


// ---------Session Storage-----------

sessionStorage.setItem('sessionId', '12345');

const sessionId = sessionStorage.getItem('sessionId');
console.log(sessionId);

sessionStorage.removeItem('sessionId');

sessionStorage.clear();

// ---------sort Array of objects--------------
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];

people.sort((a, b) => a.age - b.age);

console.log("Sorted by age:", people);

people.sort((a, b) => a.name.localeCompare(b.name));

console.log("Sorted by name:", people);


// -----------Filter Array of objects-----------
const people1 = [
      { name: 'Alice', age: 25, city: 'New York' },
      { name: 'Bob', age: 30, city: 'Los Angeles' },
      { name: 'Charlie', age: 20, city: 'New York' },
      { name: 'David', age: 35, city: 'Chicago' },
    ];
    
    
    const adults = people1.filter(person => person.age >= 30);
    console.log('Adults:', adults);
    
    
    const newYorkers = people1.filter(person => person.city === 'New York');
    console.log('New Yorkers:', newYorkers);
    
    
    const youngNewYorkers = people1.filter(person => person.age < 30 && person.city === 'New York');
    console.log('Young New Yorkers:', youngNewYorkers);

// --------------Split method---------------
        // --(usage with a String separator)--
            const str = "Hello,World,JavaScript";
            const result = str.split(","); 
            console.log(result); 
        // --(usage space as a separator)--
            const str1 = "Hello World JavaScript";
            const result1 = str1.split(" "); 
            console.log(result1); 
        // --(usage regular expression)--
            const str2 = "one,two;three four";
            const result2 = str2.split(/[,; ]+/); 
            console.log(result2); 
        
// --------------Join method--------------------
        //  --(comma separator)--
            const fruits = ["Apple", "Banana", "Cherry"];
            const result3 = fruits.join();
            console.log(result3);
        //  --(custom separator)--
            const fruits1 = ["Apple", "Banana", "Cherry"];
            const result4 = fruits1.join("-");
            console.log(result4);
        //  --(join with a space)--
            const fruits2 = ["Apple", "Banana", "Cherry"];
            const result5 = fruits2.join(" ");
            console.log(result5); 
        //  --(comma separator)--
            const fruits3 = ["Apple", "Banana", "Cherry"];
            const result6 = fruits3.join("");
            console.log(result6);   
        //  --(comma separator)--
            const fruits4 = [8,2,5,9];
            const result7 = fruits4.join(",");
            console.log(result7);
        