const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

// const sum = function(array) {
// 	 const total = array.reduce((a, b) => a + b, 0);
//   return total
//   };

const multiply = function(a,b) {
  return a * b
};

const divide = function(a,b) {
    return a / b
  };

const power = function(a, b) {
	return a ** b;
};

// const factorial = function factorials(a) {
//   let answer = 1
//   if (a === 1 || a === 0){
//     return answer;
//   }
//   else{
// 	for (let i = a; i >= 1; i--){
//     answer = answer * i;
//   }
//     return answer;}
//   };

  function twoNumOperate(a, b, operator){
    return operator(a, b);
  }