#!/usr/bin/node

function factorial (arg1) {
  let f = 1;
  if (isNaN(arg1)) {
    console.log(1);
  } else if (arg1 >= 90) {
    console.log('Infinity');
  } else {
    for (let i = 0; i <= arg1; i++) {
      f *= i;
    }
    console.log(f);
  }
}

const arg1 = Number(process.argv[2]);
factorial(arg1);
