// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

console.log(sum(21, 3, 4, 6)); // -> 34
