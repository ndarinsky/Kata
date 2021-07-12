/**
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
    this.data = {};
    this.index = {};
    this.size = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (val in this.data) return false;
    this.data[val] = this.size;
    this.index[this.size++] = val;
    return true;
};


/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!(val in this.data)) return false;

    const index = this.data[val];
    
    this.size--;
    
    const lastValue = this.index[this.size];
    this.index[index] = lastValue;
    this.data[lastValue] = index;
    
    delete this.data[val];
    delete this.index[this.size];
    
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.index[Math.floor(this.size * Math.random())];
};