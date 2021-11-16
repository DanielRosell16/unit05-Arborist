document.querySelector('header > h1').textContent = "The Arborist";
document.querySelector('header > h2').textContent = "Events and Arrays";


// Create an Array with 4 trees listed

const trees = ['oak', 'Pine', 'Aspend', 'Bold Cypress', 'Cactus']

const errorElement = document.querySelector('#errors')

const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside the displayResults div

const listTrees = () => {
    let treeList = '';
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

// add redwood to start of the list

document.querySelector('#add_redwood').onclick = () => {
    trees.push('Redwood')
    listTrees()
}

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}

document.querySelector('#remove_tree1').onclick = () => {
    trees.shift(trees)
    listTrees()
    if (trees.length > 0) {
        listTrees()
    } else {
        errorElement.textContent = "There are no trees to remove. Add a tree before removing."
}
}

document.querySelector('#remove_tree2').onclick = () => {
    trees.splice(1, 1)
    listTrees()
    if (trees.length > 1) {
        listTrees()
    } else {
        errorElement.textContent = "There isn't a second tree to remove. Add a tree before removing."
} 
}

document.querySelector('#remove_lastTree').onclick = () => {
    trees.pop()
    listTrees()
    if (trees.length > 0) {
    } else {
        errorElement.textContent = "There are no trees to remove. Add a tree before removing."
} 
}

document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

document.querySelector('#lowerTrees').onclick = () => {
    let lowerInput = trees.toString.toLowerCase
    listTrees()
}

document.querySelector("#lowerTrees").onclick = () =>{


for (var i=0; i < trees.length; i++){
    trees[i] = trees[i].toLowerCase()
}
    listTrees
}

document.querySelector('#showName3').onclick = ( )=> {
if(trees.length>2) {
    errorElement.innerHTML = `The name of tree number 3 is ${trees.at(2)}`
} else {
errorElement.textContent = 'There is no tree 3 sorry.'
}
}

document.querySelector('#showName4').onclick = ( )=> {
    if(trees.length>3) {
        errorElement.innerHTML = `The name of tree number 4 is ${trees.at(3)}`
    } else {
    errorElement.textContent = 'There is no tree 4 sorry.'
    }
    }