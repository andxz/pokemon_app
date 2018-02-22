    /*close button*/

var myNodelistDelete = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelistDelete.length; i++) {
  var deleteButton = document.createElement("span");
  var txt = document.createTextNode("RADERA");
  deleteButton.className = "close";
  deleteButton.appendChild(txt);
  myNodelistDelete[i].appendChild(deleteButton);


}


/*move button*/
var myNodelistDone = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelistDone.length; i++) {
  var doneButton = document.createElement("span");
  var txt = document.createTextNode("KLAR");
  doneButton.className = "done";
  doneButton.appendChild(txt);
  myNodelistDone[i].appendChild(doneButton);
}

/* First function receives information from input and transforms into a new li everytime
we click submit */

 

function input_Todo() {
    




    var text = document.getElementById("submit_todo").value;
    var textnode = document.createTextNode(text);
    var node = document.createElement("li");

    node.appendChild(textnode);
    document.getElementById("todo").appendChild(node);

/* lägger till delete button på node från inputfält */

  var deleteButton = document.createElement("span");
  var txt = document.createTextNode("RADERA");
  deleteButton.className = "close";
  deleteButton.appendChild(txt);

    node.appendChild(deleteButton);

    
/* lägger till done button på node från inputfält */

  var doneButton = document.createElement("span");
  var txt = document.createTextNode("KLAR");
  doneButton.className = "done";
  doneButton.appendChild(txt);
    
    node.appendChild(doneButton);

    


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


/* Function that deletes Todo that you click on */

    var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}





}






    /*for each loop that moves the item from Todo to Done Todos-list */


    const todo = document.getElementById('todo');
    const done = document.getElementById('done_todo');
    const listItems = document.querySelectorAll('li');

    for (const item of listItems) {
        item.addEventListener('click', function () {
            todo.removeChild(this);
            done.appendChild(this);

        })




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