#!/usr/bin/node

let num = Number(process.argv[2]);

if (isNaN(num)) {
  console.log('Missing number of occurrences');
} else if (num > 0) {
  for (num; num !== 0; num--) {
    console.log('C is fun');
  }
} else {
// pass
}
