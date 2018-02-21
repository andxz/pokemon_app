/* First function receives information from input and transforms into a new li everytime
we click submit */

 

function input_Todo() {

    var text = document.getElementById("submit_todo").value;
    var node = document.createElement("li");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("todo").appendChild(node);

    
    /*for each loop that moves the item from Todo to Done Todos-list */


    const todo = document.getElementById('todo');
    const done = document.getElementById('done_todo')
    const listItems = document.querySelectorAll('li');

    for (const item of listItems) {
        item.addEventListener('click', function () {
            todo.removeChild(this);
            done.appendChild(this);

        })
    }



}

    /*for each loop that moves the item from Todo to Done Todos-list */


    const todo = document.getElementById('todo');
    const done = document.getElementById('done_todo')
    const listItems = document.querySelectorAll('li');

    for (const item of listItems) {
        item.addEventListener('click', function () {
            todo.removeChild(this);
            done.appendChild(this);

        })
    }

 





/*close button*/

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("RADERA");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


/*move button*/

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("KLAR  ");
  span.className = "done";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


/* Function that deletes Todo that you click on */

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



/*Function that deletes all Todo from Todos-list */

function delete_allTodos() {
    var list = document.getElementById("todo");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

/*Function that deletes all Todo from Done Todos-list */

function delete_allDoneTodos() {
    var list = document.getElementById("done_todo");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}







/*






function myFunction() {
    var x = document.getElementById("submit_todo").value;
    document.getElementById("todo").innerHTML = x;
}


/* varje gång man klickar blir det done


const todo = document.getElementById('todo');
const done = document.getElementById('done')
const listItems = document.querySelectorAll('li');

for(const item of listItems){
    item.addEventListener('click', function(){
        todo.removeChild(this);
        done.appendChild(this);
    })
}

/* varje gång man klickar li tas ett element bort
const listItems = document.querySelectorAll('li');

for(const item of listItems){
    item.addEventListener('click', function(){
        this.parentElement.removeChild(this);
    })
}

t*/
