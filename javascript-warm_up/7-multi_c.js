#!/usr/bin/node

let num = Number(process.argv[2]);

if (isNaN(num) || num <= 0) {
  console.log('Missing number of occurrences');
} else {
  for (num; num !== 0; num--) {
    console.log('C is fun');
  }
}
