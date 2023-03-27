

function once(callback) {
    this.result = null
  
    return function (args) {
      if (this.result) return this.result
      this.result = callback(args)
      return this.result
    }      
  }

let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
incrementByOnce(2); // i is now 3; The function returns 3.
incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
incrementByOnce(2); 