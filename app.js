var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//create the submit event
form.addEventListener('submit', addItems);
//Remove item
itemList.addEventListener('click', removeItems);
//create filter event
filter.addEventListener('keyup', filterItems);

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

//Remove Item Function
function removeItems(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Confirm Delete')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items function
function filterItems(e) {
  // convert all text items to lowerCase
  var text = e.target.value.toLowerCase();
  //Get Element List(li)
  var items = itemList.getElementsByTagName('li');
  //convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
