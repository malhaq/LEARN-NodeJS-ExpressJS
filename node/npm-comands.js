//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//npm install - to download all modules from dependency in the package.json

//package.json -manifest file (stores importatnt info about project/package)
//npm init (step by step,enter to skip)
//npm init -y (everything is default) nothing to be filled

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
console.log(items);
const newItems = _.flattenDeep(items)
console.log(newItems);
