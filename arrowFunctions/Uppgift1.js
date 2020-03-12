// const sayHi = function() {
//     alert('Hi!')
//   }

const sayHi = () => alert("Hi")
  


// const double = function(n) {
//     return n * 2
//   }
  
  const double = n => n * 2

// function isEven(val) {
//     return val % 2 === 0
//   }
  const isEven = val => val % 2 === 0


// const sum = function(a, b) {
//     return a + b
//   }
  
const sum = (a,b) => a + b

  
//   function filterRange(arr, a, b) {
//     return arr.filter(function(item) {
//       return a <= item && item <= b
//     })
//   }
const filterRange = (arr,a,b) => arr.filter(item => a <= item && item <= b)
