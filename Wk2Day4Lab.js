// Write a while loop for the given output: 
// 10, 30, 50, 70, 90, 
//  20, 40, 60, 80, 100

let row = 1;
while (row <= 2) {
  let column = 10 + (row - 1) * 10;
  let output = '';
  for (let j = 0; i < 5; i++) {
    output += column + i * 20;
    if (j < 4) {
      output += ', ';
    }
  }
  console.log(output);
  row++;

}

// Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.
let number = 500;
while (number <= 800) {
  if (number % 4 === 0) {
    console.log(number);
  }
  number++;
}