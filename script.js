
function more() {
  let a = document.getElementById('butId').value
  var node = document.createElement("LI");
  var textnode =
      document.createTextNode(a);
  var img = document.createElement('img');
  img.src = "X.png"
  img.className = "cancelimg"
  img.onclick = function remove() {

  }
  node.className = "ui-state-default double"
  node.appendChild(textnode);
  node.appendChild(img);
  document.getElementById("sortable1").appendChild(node).classname;
}

// this was the remove button
function remove() {

}

// this is a jquary to make the
 $( function() {
   $( "#sortable1, #sortable2, #sortable3" ).sortable({
     connectWith: ".connectedSortable"
   }).disableSelection();
  } );
