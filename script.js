
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
  var doc3 = document.getElementById("sortable3")
  doc3.removeChild(doc3.childNodes[0]);
}

// this is a jquary to make the
 $( function() {
   $( "#sortable1, #sortable2, #sortable3" ).sortable({
     connectWith: ".connectedSortable"
   }).disableSelection();
  } );

// function dates(){
//   var dd = someDate.getDate();
// var mm = someDate.getMonth() + 1;
// var y = someDate.getFullYear();
//
// var someFormattedDate = dd + '/'+ mm + '/'+ y;
// document.getElementById('dueDate')
// }

