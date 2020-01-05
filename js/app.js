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
let removeButton = document.getElementsByClassName("X").onclick

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
    }
  };

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

  const deleteElement = function() {
  var remove = false;
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].onclick = function() {
        remove = true;
        let removeElement = listNode[i];
        removeElement.remove();
        toDo.splice(i, 1);
    };
    if (remove) {
        break;
    }
  }
};






































/*
window.onload = function() {
document.getElementById("button").onclick = addElement;
document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      addElement();
    }
  };
};

let toDo = [];
let addButton = document.getElementById("button");
let row = document.getElementsByClassName("row");
let removeButton = document.getElementById("removeButton");
let completeButton = document.getElementById("completeButton");
let priorityButton = document.getElementById("priorityButton");
let itemsInList = document.getElementsByClassName("toDoList");
let a = 0;
let i = 0;


const addElement = function() {
  var input = document.getElementById("searchbar").value;
  if (input === '') {
// on purpose
  }
  else {
    var toDoList = {
      task: input,
      complete: false,
      priority: false,
      htmlRow: null,
      text: null,
      priorityButton: null,
      removeButton: null,
    };
  toDo.push(input);

  var value = toDo.indexOf(toDoList);

  toDo[value].htmlRow = document.createElement("tr");
  toDo[value].htmlRow.setAttribute("class", "row");
  document.getElementById("table").append(toDo[value].htmlRow);

  toDo[value].htmlPriorityButton = document.createElement("td");
  toDo[value].htmlPriorityButton.setAttribute("class", "priorityButton");
  toDo[value].htmlPriorityButton.innerHTML = "!";

  row[value].append(toDo[value].htmlPriorityButton);

  toDo[value].htmlText = document.createElement("td");
  toDo[value].htmlText.innerHTML = toDo[value].task;
  toDo[value].htmlText.setAttribute("class", "toDoList");

  row[value].append(toDo[value].htmlText);

  toDo[value].htmlCompleteButton = document.createElement("td");
  toDo[value].htmlCompleteButton.innerHTML = "&#x2713;";
  toDo[value].htmlCompleteButton.setAttribute("class", "complete_button");

  row[value].append(toDo[value].htmlCompleteButton);

  toDo[value].htmlRemoveButton = document.createElement("td");
  toDo[value].htmlRemoveButton.setAttribute("class", "remove_button");
  toDo[value].htmlRemoveButton.innerHTML = "X";

  row[value].append(toDo[value].htmlRemoveButton);
      }
  document.getElementById("searchbar").value = "";
  };
*/
/*
  const deleteElement = function() {
  var remove = false;
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].onclick = function() {
        remove = true;
        let removeElement = listNode[i];
        toDo.splice(i, 1);
        removeElement.remove();
    };
    if (remove) {
        break;
    }
  }
};

const completeElement = function() {
var finish = false;
for (let x = 0; x < completeButton.length; x++) {
  complete[x].onclick = function() {
     if (toDo[x].complete == false) {
       finish = true;
       completeItem[x].style.setProperty("text-decoration", "line-through");
       completeItem[x].style.backgroundColor = "#baff66";
       completeButton[x].style.backgroundColor = "#baff66";
       toDo[x].complete = true;
     }
     else if (to[x].complete == true) {
       completeButton[x].style.backgroundColor = "white";
       completeItem[x].style.setProperty("text-decoration", "none");
       completeItem[x].style.backgroundColor = "white";
       toDo[x].complete = false;
     }
   };
   if (finish) {
     break;
   }
}
}
*/
/*
addButton.onclick = addElement;

document.getElementById("searchbar").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    document.getElementById("button").click();
  }
});
*/
