// i put the todo in the input
// then i hit the submit button and the item gets added to the ul
//when i click the item in the ul it gets crossed out
//then it updates the number of todos i have to do
// then i click the button that say clear list to erase all todos
// or i clear 


document.querySelector('.clearAll').addEventListener('click', clearAll)
document.querySelector('.clearCompleted').addEventListener('click', clearCompleted)
document.querySelector('.addTask').addEventListener('click', addTask)

let listCount = 0

function addTask() {
    // if the input field isn't empty, they can't add a task
    if (document.querySelector('.taskValue').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        let newTask = document.querySelector('.taskValue').value
        let newListItem = document.createElement('li')
        let list = document.createTextNode(newTask)
        newListItem.appendChild(list)
        document.querySelector('.taskList').appendChild(newListItem)
        newListItem.addEventListener('click', () => {
            newListItem.classList.toggle('strikeThrough')
            // if the item is striked, then subtract it from the list total 
            if (newListItem.classList.contains('strikeThrough')) {
                listCount = listCount - 1
                document.querySelector('span').innerHTML = listCount
            }
        })
        listCount = listCount + 1
        document.querySelector('span').innerHTML = listCount
    }
}

function clearAll() {
    let eachTask = document.querySelectorAll('li')
    eachTask.forEach((task => {
        task.remove()
    }))
}

function clearCompleted() {
    console.log('clearing all completed')
    let completed = document.querySelectorAll('.strikeThrough')
    completed.forEach((task => {
        task.remove()
    }))
}