// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.
class EventEmitter {
    constructor() {
      this.subs = {}
    }
  
    on = (event, callback) => {
      if (this.subs[event]) {
        this.subs[event].push(callback)
      } else {
        this.subs[event] = [callback]
      }
    }
  
    emit = (event, ...args) => {
      const callbacks = this.subs[event] 
      callbacks?.forEach(callback => {
        callback(...args)
      })  
    }
  
    off = (event, callback) => {
      const callbacks = this.subs[event] 
      if(callbacks) {
        this.subs[event] = callbacks.filter(el => el!=callback)
      }
    }
  }

const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}
emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 2, 5);
// > "The sum is 7"

emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
emitter.emit('foo', 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off('foo', addTwoNumbers);
emitter.emit('foo', -3, 9);
// > "The product is -27"
