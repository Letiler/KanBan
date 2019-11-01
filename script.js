function more() { 
  let a = document.getElementById('butId').value
  var node = document.createElement("LI"); 
  var textnode =  
      document.createTextNode(a); 
  node.className = "ui-state-default double"
  node.appendChild(textnode); 
  document.getElementById("sortable1").appendChild(node).classname; 
}

function remove(){
  var node = document.getElementById('butid').value
  node.removeChild("sortable1")
}