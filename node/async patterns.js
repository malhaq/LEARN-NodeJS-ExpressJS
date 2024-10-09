//async patterns
// - Setup promises
const {readFile,writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
        
    })
}

// getText('./content/first.txt').then(result => console.log(result)).catch(err => console.log(err));

const start = async() =>{
    try {
        // const first = await getText('./content/first.txt');
        // const first = await readFilePromise('./content/first.txt','utf8');
        const first = await readFile('./content/first.txt','utf8');
        // const second = await getText('./content/second.txt');
        // const second = await readFilePromise('./content/second.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        // await writeFilePromise('./content/result-mind-bomb.txt',`THIS IS GREAT: ${first} , ${second}`)
        await writeFile('./content/result-mind-bomb.txt',`THIS IS GREAT: ${first} , ${second}`,{flag:'a'})
        console.log(first,second);
    } catch (error) {
        console.log(error)
    }
    
    
    
}
start()



// - Blocking code

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Home Page')
    
//     }
//     if(req.url==='/about'){
//         //Blocking code!!
//         for(let i = 0; i<1000;i++){
//             for(let j = 0; j<1000;j++){
//                 console.log(`${i} ${j}`)
//             }
//         }
//         res.end('About page')
//     }
//     res.end('Error Page')



// })

// server.listen(5000,()=>{
//     console.log('server is listening on port 5000');
    
// })

