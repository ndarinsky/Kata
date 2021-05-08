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
        console.error(possibleAction)
    }

    // console.error(board)
    //console.error(trees)

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    let curSun = sun
    const myTrees = trees.filter(tree => tree.isMine)//.sort((a,b)=> a.index > b.index)
    // console.error(myTrees)
    while(curSun >= 4 && myTrees.length>0) {
        console.error(`sun = ${sun}`)
        const tree = myTrees.shift()
        curSun = curSun -4
        console.log(`COMPLETE ${tree.index}`)
    }
    
    // GROW cellIdx | SEED sourceIdx targetIdx | COMPLETE cellIdx | WAIT <message>
    console.log('WAIT');
}
