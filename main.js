
/* First function receives information from input and transforms into a new li with textnode(todo) everytime we click Submit */

function input_Todo() {

    var text = document.getElementById("submit_todo").value;
    var textnode = document.createTextNode(text);
    var node = document.createElement("li");

    node.appendChild(textnode);
    document.getElementById("todo").appendChild(node);

    /* Adds Delete Button to the new todo */

    var deleteButton = document.createElement("span");
    var txt = document.createTextNode("Delete");
    deleteButton.className = "close";
    deleteButton.appendChild(txt);

    node.appendChild(deleteButton);

    /* Adds Done Button to the new todo */

    var doneButton = document.createElement("span");
    var txt = document.createTextNode("Done");
    doneButton.className = "done";
    doneButton.appendChild(txt);

    node.appendChild(doneButton);

    /*For Each loop that moves the item from Todo to Done Todos-list when clicked */

    const todo = document.getElementById('todo');
    const done = document.getElementById('done_todo')
    const listItems = document.querySelectorAll('li');

    for (const item of listItems) {
        item.addEventListener('click', function () {
            todo.removeChild(this);
            done.appendChild(this);
        })
    }
        
    /* Function that deletes todo if Delete button clicked */

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

/*Input function ends^ */



    /* Adds Delete Button to the existing todos */

var myNodelistDelete = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelistDelete.length; i++) {
    var deleteButton = document.createElement("span");
    var txt = document.createTextNode("Delete");
    deleteButton.className = "close";
    deleteButton.appendChild(txt);
    myNodelistDelete[i].appendChild(deleteButton);
}

    /* Adds Done Button to the existing todos */

var myNodelistDone = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelistDone.length; i++) {
    var doneButton = document.createElement("span");
    var txt = document.createTextNode("Done");
    doneButton.className = "done";
    doneButton.appendChild(txt);
    myNodelistDone[i].appendChild(doneButton);
}

    /*For Each loop that moves the item from Todo to Done Todos-list when clicked */

const todo = document.getElementById('todo');
const done = document.getElementById('done_todo');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
    item.addEventListener('click', function () {
        todo.removeChild(this);
        done.appendChild(this);

    })
}

    /* Function that deletes todo if Delete button clicked */

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

/*Function that deletes All Todos from Todos-list */

function delete_allTodos() {
    var list = document.getElementById("todo");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

/*Function that deletes all Todos from Done Todos-list */

function delete_allDoneTodos() {
    var list = document.getElementById("done_todo");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}
