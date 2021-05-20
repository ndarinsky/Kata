/**
 * KATA: Write programm to play races. There are 3 cars with different speed.
 * They start simultaniously.
 */

//Solution:
const speed = [1, 3, 6, 2]

function createCar(name, speed, path) {
    return new Promise(function go(resolve, reject) {
        let distance = 0
        setTimeout(() => {
            distance = distance + speed
            if (distance >= path) {
                resolve('finish')
                console.log('finish')
            } else {
                console.log(`name: ${name} - ${distance}`)
            }
        }, 1000)
    })
}

createCar('red', 2, 10)
createCar('blue', 3, 10)