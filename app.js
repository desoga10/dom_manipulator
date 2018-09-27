var form = document.getElementById('addForm');
var item = document.getElementById('items');

//create the submit event
form.addEventListener('submit', addItems);
//Add Items
function addItems(e) {
  e.preventDefault();

  //Get Input Value
  var newItem = document.getElementById('item');

  //Create new li
  var li = document.createElement('li');
  //add className
  li.className = 'list-group-item';

  console.log(li);
}
