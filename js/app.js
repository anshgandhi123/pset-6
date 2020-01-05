window.onload = function() {
  document.getElementById("table").onmouseover = start;
}

let toDo = []
let addButton = document.getElementById("addButton");
let removeButton = document.getElementsByClassName("removeButton");
let completeButton = document.getElementsByClassName("completeButton");
let priorityButton = document.getElementsByClassName("priorityButton");
let items = document.getElementsByClassName("toDoList")
let row = document.getElementsByClassName("row");
let elementPriorities;
let i;
let x;
let z;

const addElement = function() {
  let input = document.getElementById("searchbar").value;
  if (input === "") {
    // on purpose
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
        break; // on purpose
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
         items[x].style.color = "green"
         completeButton[x].style.color = "green"
         toDo[x].complete = true;
       }
       else if (toDo[x].complete == true) {
         items[x].style.setProperty("text-decoration", "none");
         items[x].style.backgroundColor = "white";
         completeButton[x].style.backgroundColor = "white";
         items[x].style.color = "darkorange"
         completeButton[x].style.color = "blue"
         toDo[x].complete = false;
       }
     };
     if (completed) {
       break; // on purpose
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
        priorityButton[z].style.color = "red"
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
        priorityButton[z].style.color = "purple"
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
