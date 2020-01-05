let toDo = []
var addButton = document.getElementById("addButton");
var row = document.getElementsByClassName("row");
let priorityButton = document.getElementsByClassName("priorityButton");
let completeButton = document.getElementsByClassName("completeButton");
let removeButton = document.getElementsByClassName("removeButton");
let items = document.getElementsByClassName("toDoList")

let elementPriorities;

window.onload = function() {
  document.getElementById("table").onmouseover = start;
}

const addElement = function() {
  let input = document.getElementById("searchbar").value;
  if (input === "") {

  }
  else {
      let toDoList = {
          task: input,
          priority: false,
          complete: false,
          html_row: null,
          html_priorityButton: null,
          html_text: null,
          html_removeButton: null
      }

      toDo.push(toDoList);
      let value = toDo.indexOf(toDoList);

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
      toDo[value].htmlCompleteButton.setAttribute("class", "completeButton");

      row[value].append(toDo[value].htmlCompleteButton);

      toDo[value].htmlRemoveButton = document.createElement("td");
      toDo[value].htmlRemoveButton.setAttribute("class", "removeButton");
      toDo[value].htmlRemoveButton.innerHTML = "X";

      row[value].append(toDo[value].htmlRemoveButton);
    }
    document.getElementById("searchbar").value = "";
};

const deleteElement = function() {
  var remove = false;
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].onclick = function() {
        remove = true;
        let removeElement = row[i];
        removeElement.remove();
        toDo.splice(i, 1);
    };
    if (remove) {
        break;
    }
  }
}

const completeElement = function() {
  var completed = false;
  for (let x = 0; x < completeButton.length; x++) {
    completeButton[x].onclick = function() {
       if (toDo[x].complete == false) {
         completed = true;
         items[x].style.setProperty("text-decoration", "line-through");
         items[x].style.backgroundColor = "lightgreen";
         completeButton[x].style.backgroundColor = "lightgreen";
         toDo[x].complete = true;
       }
       else if (toDo[x].complete == true) {
         completeButton[x].style.backgroundColor = "white";
         items[x].style.setProperty("text-decoration", "none");
         items[x].style.backgroundColor = "white";
         toDo[x].complete = false;
       }
     };
     if (completed) {
       break;
     }
  }
}

const prioritizeElement = function() {
  var prioritized = false;
  for (let z = 0; z < priorityButton.length; z++) {
    priorityButton[z].onclick = function () {
      if (toDo[z].priority == false) {
        elementPriorities = row[z]
        prioritized = true;
        priorityButton[z].style.backgroundColor = "yellow";
        row[0].before(elementPriorities);
        toDo[z].priority = true;

        const move = toDo[z];

        toDo.splice(z, 1);
        toDo.unshift(move);
        prioritized = true;
      }
      else if (toDo[z].priority) {
        elementPriorities = row[z]
        priorityButton[z].style.backgroundColor = "white";
        row[toDo.length - 1].after(elementPriorities);
        toDo[z].priority = false;

        let element_move = toDo[z];
        toDo.splice(z, 1);
        toDo.push(element_move);
        prioritized = true;
      }
    };
    if (prioritized) {
      break;
    }
  }
}

const start = function() {
  deleteElement();
  completeElement();
  prioritizeElement();
}

addButton.onclick = addElement

document.getElementById("searchbar").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("addButton").click();
  }
});
