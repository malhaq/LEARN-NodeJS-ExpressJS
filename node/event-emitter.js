const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,age) => {
    console.log(`data recieved name: ${name} age: ${age} `)
})
customEmitter.on('response', () => {
    console.log(`some other logic here `)
})
customEmitter.emit('response','Subhi',50)


