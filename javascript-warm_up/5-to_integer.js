#!/usr/bin/node

if (Number(process.argv[2]) !== undefined) {
  console.log(`My number: ${Number(process.argv[2])}`);
} else {
  console.log('Not a number');
}
