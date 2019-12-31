

var firstLI = document.querySelector("li");
firstLI.addEventListener("onclick", function() {
    var item = document.getElementById("searchbar").value
    textNode = document.createTextNode(input.value),
    liNode = document.createElement("li")
    newItem.append(text)
    document.getElementById("addElement").append(newItem)
});


/*
function addElement() {

  var text = document.createTextNode(item)
  var newItem = document.createElement("li")

}
*/
/*
  var input = document.getElementById("searchbar").value;
  function addElement() {
  var listNode = document.getElementById("unorderedList"),
      textNode = document.createTextNode(input.value),
      liNode = document.createElement("li")
      liNode.append(textNode);
      listNode.append(liNode);
}
*/
