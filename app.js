/*

Pseudocode:

1.  Create state object
What is contained in the state object:
- item name

state = {
  items: [
    {name: apples, checked: false},
    {name: oranges, checked: false},
    {name: milk, checked: true},
    {name: bread, checked: false}
  ]
}

state = {
  items: {
    apples: false,  // or apples: {checked: false}
    ...
  }
}


2.  Functions that modify the state object

- add
state.items.push(...)

- check / uncheck
state.items[index of item].checked = toggle true/false

function toggleItemCheck(item) {}

- remove (delete)
delete property statement in JS

delete state.items.apple 
-- OR --
array.splice(*where to start deleting*, how many elements to delete = 1)


3.  Functions that render the state
 -- jQuery methods that updates the DOM
pass in pointer to the 'shopping-list'

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' + item + '</li>';
    });
    element.html(itemsHTML);
};


4.  Event listeners that trigger the previous functions

$('.shopping-list-add').submit(function(event) {
    event.preventDefault();
    addItem(state, $('.shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
});

$('.shopping-item-toggle').click(function(event) {
    toggleItemCheck(state, $(event.currentTarget).text() );
    renderList(state, $('.shopping-list'));
});

$('.shopping-item-delete').click(function(event) {
    deleteItem(state, $(event.currentTarget).text() );
    renderList(state, $('.shopping-list'));
});


Final output goal:
The user being able to create a shopping list and edit and update the shopping list
-- when user submits a new item, it's added to the list
-- when user takes an action on an item, it's reflected on the list



*/

$(document).ready(function () {
  

});








