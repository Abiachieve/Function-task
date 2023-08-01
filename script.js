//Function
function mul(a, b, c, d) {
    return a * b * c * d;
  }
  function add(a, b, c) {
    return a + b + c;
  }
  function sub(a, b) {
    return a - b;
  }
  console.log("hi");
  console.log(sub(2, 1)); //1
  console.log(add(1, 2, 2)); // 5
  console.log(mul(1, 2, 3, 4)); //24
  
  //Example :-Print the odd numbers in an array
  var arr = [12, 13, 14, 15, 16];
  var result = [];
  //function is used to extract the values(odd array)
  function odd(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  console.log(odd(arr));
  
  
  //function without parameter
  function greet() {
    return "welcome";
  }
  greet();
  
  //Anonyomus Function
  //Example :-Print the odd numbers in an array
  var arr = [12, 13, 14, 15, 16];
  var result = [];
  var odd = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(odd(arr));
  
  //IIFE (Immediately Invoked Function Expression)
  //Example :-Print the odd numbers in an array
  (function odd(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    console.log(result);
  })([12, 13, 14, 15, 16]);
  
  //Arrow Function (ES6)
  //Example :-Print the odd numbers in an array
  const od = (arr) => {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        result.push(arr[i]);
      }
    }
    return result;
  };
  console.log(od([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  //Sum of all numbers in an array using function
function add(x, y) {
    return x + y;
  }console.log(add(2,3));

  //Sum of all numbers in an array using arrow function
  var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce((a, b) => a + b);
console.log(sum);

//Sum of all numbers in an array using anonymous function and IIFE

var arr = [1, 2, 3, 4, 5];
var sum = (function(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
})(arr);
console.log(sum);

//Convert all the strings to title caps in a string array using function
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  
  var arr = ["hello welcome", "here is  a program to", "display uppercase"];
  var newArr = arr.map(titleCase);
  console.log(newArr);

//Convert all the strings to title caps in a string array using anonymous function
  var arr = ["hello welcome", "here is  a program to", "display uppercase"];
var newArr = arr.map(function(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
});
console.log(newArr);

//Convert all the strings to title caps in a string array using arrow function
var arr = ["hello world", "this is a test", "another test"];
var newArr = arr.map(str => str.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' '));
console.log(newArr);

//Convert all the strings to title caps in a string array using IIFE function
var arr = ["hello world", "this is a test", "another test"];
var newArr = (function(arr) {
  return arr.map(function(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  });
})(arr);
console.log(newArr);