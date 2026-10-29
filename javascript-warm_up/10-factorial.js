#!/usr/bin/node

let arg1 = Number(process.argv[2]);
let i = 1;

if (isNaN(arg1)) {
  console.log(1);
} else if (arg1 >= 90) {
  console.log('Infinity');
} else {
  for (i; arg1 !== 0; arg1--) {
    i = i * arg1;
  }
  console.log(i);
}
