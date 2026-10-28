#!/usr/bin/node

if (process.argv.length <= 4) {
  console.log('Argument found');
} else if (process.argv.length < 5) {
  console.log('No Argument');
} else {
  console.log('Arguments found');
}
