function more() { 
  let a = document.getElementById('butId').value
  var node = document.createElement("LI"); 
  var textnode =  
      document.createTextNode(a); 
  node.className = "ui-state-default double"
  node.appendChild(textnode); 
  document.getElementById("sortable1").appendChild(node).classname; 
}


// this is the remove button 
function remove() { 
  var doc = document.getElementById("sortable1")
  var doc2 = document.getElementById("sortable2")
  var doc3 = document.getElementById("sortable3")  
  doc.removeChild(doc.childNodes[0]);
  doc2.removeChild(doc2.childNodes[0]);
  doc3.removeChild(doc3.childNodes[0]);
}
$( function() {
  $( "#sortable1, #sortable2, #sortable3" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
} );