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
const firstChild = document.getElementById('first');
        

const parent = firstChild.parentNode;
console.log('Parent:', parent.id); 


const secondChild = firstChild.nextElementSibling;
console.log('Next Sibling:', secondChild.id); 
const lastChild = parent.lastElementChild;
console.log('Last Child:', lastChild.id); 

const thirdChild = lastChild.previousElementSibling;
console.log('Previous Sibling:', thirdChild.id);


// -----------sort Array of ojects---------
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
  ];
  

  people.sort((a, b) => a.age - b.age);
  console.log('Sorted by age (ascending):', people);
  
  people.sort((a, b) => a.name.localeCompare(b.name));
  console.log('Sorted by name (alphabetical):', people);
  

//   ----------Filter Array of objects-----------
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
  