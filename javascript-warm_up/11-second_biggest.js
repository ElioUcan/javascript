#!/usr/bin/node

const args = Number(process.argv.length);
const numbers = [];
if (args === 0 || args === 1) {
  console.log(0);
} else {
  for (let i = 2; i < args; i++) {
    numbers.push(Number(process.argv[i]));
  }
  numbers.sort((a, b) => a - b);
  console.log(numbers[numbers.length - 2]);
}
