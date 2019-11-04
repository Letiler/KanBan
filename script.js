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





// this is a jquary to make the 
// $( function() {
//   $( "#sortable1, #sortable2, #sortable3" ).sortable({
//     connectWith: ".connectedSortable"
//   }).disableSelection();
// } );



$( function() {
  $( ".column" ).sortable({
    connectWith: ".column",
    handle: ".portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
  });

  $( ".portlet" )
    .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
    .find( ".portlet-header" )
      .addClass( "ui-widget-header ui-corner-all" )
      .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  $( ".portlet-toggle" ).on( "click", function() {
    var icon = $( this );
    icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
  });
} );