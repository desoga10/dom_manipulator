var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//create the submit event
form.addEventListener('submit', addItems);
//Remove item
itemList.addEventListener('click', removeItems);

//Add Items
function addItems(e) {
  e.preventDefault();

  //Get Input Value
  var newItem = document.getElementById('item').value;

  //Create new li
  var li = document.createElement('li');
  //add className
  li.className = 'list-group-item';

  //Add textNode with input value
  li.appendChild(document.createTextNode(newItem));

  //create delete button element
  var deleteItem = document.createElement('button');
  //add classname to deleteItem button
  deleteItem.className = 'btn btn-danger btn-sm float-right delete';
  //Append TtextNode
  deleteItem.appendChild(document.createTextNode('x'));

  //Append Delete Button to each li
  li.appendChild(deleteItem);

  //Append li to list
  itemList.appendChild(li);
}
