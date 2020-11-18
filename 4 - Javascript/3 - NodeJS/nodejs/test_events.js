const EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Event Listener

myEmitter.on('event', () => console.log('event fired'));

// init

myEmitter.emit('event');