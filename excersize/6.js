//__proto__

function Cat(name, color) {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function() {
    console.log(`test`)
}

const cat = new Cat('1','2')
console.log(Cat.prototype)