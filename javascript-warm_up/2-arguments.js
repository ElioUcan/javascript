#!/usr/bin/node

const args = process.argv.length - 2


if (process.argv.length == 0) {
  console.log('No Argument');
} else if (process.argv.length == 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
