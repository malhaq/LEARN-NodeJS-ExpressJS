//event loop examples
// fourth ex 
const http = require('http')
const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('server listening on port number : 5000......')
})



// // third ex
// setInterval(()=>{ //the code will be repeted by event loop every 2000  ms -NOTE: setInterval is async the synv actions will run first
//     console.log('Hello World');
// },2000)
// console.log('I will run first');
// // process stays alive unless:
// // Kill process CTRL + c
// // unexpected error






// //second ex
// //started operating system process
// console.log('First')
// setTimeout(()=>{
//     console.log('Second');
// },0)
// console.log('Third')
// //completed and exited operating system process



// //first ex
// const { readFile } = require('fs')
// console.log('start a first task');
// //check file path
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(result)
//     console.log('completed the first task')
// })
// console.log('starting nexst task');
