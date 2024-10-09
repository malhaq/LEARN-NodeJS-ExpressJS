const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subcontent','test.text')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

console.log('------------------------------------------------')
const absl = path.resolve(__dirname,'content','suncontent','test.txt')
console.log(absl)