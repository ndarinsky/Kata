/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// class Cell {
//     constructor(index, neigb, rich){
//         this.index = index,
//         this.neigb = neigb,
//         this.richness = rich 
//     }
// }

// class Tree {
//     constructor(cellIndex, size, isMine, isDormant) {
//         this.index = index
//         this.size = size
//         this.isMine = isMine
//         this.isDormant = isDormant
//     }
// }

var board = []

const numberOfCells = parseInt(readline()); // 37
for (let i = 0; i < numberOfCells; i++) {
    var inputs = readline().split(' ');
    const index = parseInt(inputs[0]); // 0 is the center cell, the next cells spiral outwards
    const richness = parseInt(inputs[1]); // 0 if the cell is unusable, 1-3 for usable cells
    const neigh0 = parseInt(inputs[2]); // the index of the neighbouring cell for each direction
    const neigh1 = parseInt(inputs[3]);
    const neigh2 = parseInt(inputs[4]);
    const neigh3 = parseInt(inputs[5]);
    const neigh4 = parseInt(inputs[6]);
    const neigh5 = parseInt(inputs[7]);

    board.push( { 
            index,
            neigb: [neigh0, neigh1, neigh2, neigh3, neigh4, neigh5],
            richness
        })
}

const completeCost = 4
const getGrowCost12 = (trees) => {
    const size2Trees = trees.filter(t => t.size === 2).length
    return size2Trees + 3
}

const getGrowCost23 = (trees) => {
    const size2Trees = trees.filter(t => t.size === 3).length
    return size2Trees + 7 
}

const getGrowCost13 = (trees) => {
    return getGrowCost12(trees) + getGrowCost23(trees)
}

const getCompleteCost1 = (trees) => {
    return getGrowCost13(trees) + completeCost
}

const getCompleteCost2 = (trees) => {
    return getGrowCost23(trees) + completeCost
}

const getCompleteCost3 = (trees) => {
    return completeCost
}


    let turnes = 0
// game loop
while (true) {
    const day = parseInt(readline()); // the game lasts 24 days: 0-23
    const nutrients = parseInt(readline()); // the base score you gain from the next COMPLETE action
    var inputs = readline().split(' ');

    const sun = parseInt(inputs[0]); // your sun points
    const score = parseInt(inputs[1]); // your current score
    var inputs = readline().split(' ');
    
    const oppSun = parseInt(inputs[0]); // opponent's sun points
    const oppScore = parseInt(inputs[1]); // opponent's score
    const oppIsWaiting = inputs[2] !== '0'; // whether your opponent is asleep until the next day
    const numberOfTrees = parseInt(readline()); // the current amount of trees
    
    var trees = []
    for (let i = 0; i < numberOfTrees; i++) {
        var inputs = readline().split(' ');
        const cellIndex = parseInt(inputs[0]); // location of this tree
        const size = parseInt(inputs[1]); // size of this tree: 0-3
        const isMine = inputs[2] !== '0'; // 1 if this is your tree
        const isDormant = inputs[3] !== '0'; // 1 if this tree is dormant

        trees.push({
                index: cellIndex,
                size,
                isMine,
                isDormant
            })
    }

    const numberOfPossibleActions = parseInt(readline()); // all legal actions
    for (let i = 0; i < numberOfPossibleActions; i++) {
        const possibleAction = readline(); // try printing something from here to start with
        ///console.error(possibleAction)
    }
  

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    let curSun = sun
    console.error(`DAY: ${day} || curSun: ${curSun}`)
    const myTrees = trees.filter(tree => tree.isMine)//.sort((a,b)=> a.size > b.size)
    const treesBySize = []
    treesBySize.push([])
    treesBySize.push(myTrees.filter(tree => tree.size === 1))
    treesBySize.push(myTrees.filter(tree => tree.size === 2))
    treesBySize.push(myTrees.filter(tree => tree.size === 3))

    console.error(treesBySize[1])
    console.error(treesBySize[2])
    console.error(treesBySize[3])

    const grow1 = getGrowCost12(myTrees)
    const grow2 = getGrowCost23(myTrees)
    const grow3 = getCompleteCost3(myTrees)
    // while(myTrees.length>0 && !oppIsWaiting && score <= oppScore) {
        console.error(`sun: ${sun}| score: ${score} vs ${oppScore}`)
        console.error(`1:${grow1}| 2:${grow2}| 3:${grow3} `)
        let wait = true
        if (treesBySize[3] && treesBySize[3].length && curSun >= grow3) {
            const tree = treesBySize[3].shift()
            curSun = curSun - grow3
            console.log(`COMPLETE ${tree.index}`)
            wait = false
        }
        if (treesBySize[2] && treesBySize[2].length && curSun >= grow2) {
            const tree = treesBySize[2].shift()
            curSun = curSun - grow2
            console.log(`GROW ${tree.index}`)
             wait = false
        }
        if (treesBySize[1] && treesBySize[1].length && curSun >= grow1) {
            const tree = treesBySize[1].shift()
            curSun = curSun - grow1
            console.log(`GROW ${tree.index}`)
            wait = false
        }
        if (wait) {
            console.log('WAIT');
        }
    // }
    
    // GROW cellIdx | SEED sourceIdx targetIdx | COMPLETE cellIdx | WAIT <message>
    // console.log('WAIT');
}
