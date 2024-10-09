//sync file module
/*
//this way is the exact same result as the one after
const fs = require('fs')
fs.readFileSync('./content/first.txt','utf8')
fs.writeFileSync()
*/
const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//console.log(first, second)
writeFileSync('./content/result-sync.txt',
     `This is the result : ${first}, ${second}`,
     {flag:'a'})//the 'a' flag means append the file
console.log('done with this task');
console.log('starting the next one');
