// NEED TO FIX EMPTY ENTER KEY THING AS IT STILL GOES THROUGH
// NEED TO FIX DELETE ITEM THING TOO

window.onload = function() {
document.getElementById("button").onclick = addElement;
document.getElementsByClassName("X").onclick = deleteElement;
document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      addElement();
    }
  };
};
let toDo = [];
let removeButton = document.getElementsByClassName("X");


const addElement = function() {
  var input = document.getElementById("searchbar").value;
  var liNode = document.createElement("li");
  var listNode = document.getElementById("unorderedList");

  if (input === '') {
// on purpose
  }
  else {
    let toDoList = {
      task: input,
      complete: false,
      priority: false,
      remove: null
    };
    }
  liNode.append(input);
  listNode.append(liNode);
  toDo.push(input);


  var exclamation = document.createElement("button");
  exclamation.id = exclamation;
  exclamation.value = "Priority";
  exclamation.setAttribute("class", "priority");
  exclamation.innerHTML = "!";
  var done = document.createElement("button");
  done.id = done;
  done.value = "Complete";
  done.setAttribute("class", "fa fa-check");
  var remove = document.createElement("button");
  remove.id = remove;
  remove.value = "Delete";
  remove.setAttribute("class", "X");
  remove.innerHTML = "X";
  liNode.append(exclamation);
  liNode.append(done);
  liNode.append(remove);

  document.getElementById("searchbar").value = "";

  };

const deleteElement =   function(number) {
  	toDo.splice(number,1);
  	displayItems();
  }
