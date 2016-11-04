$(document).ready(function () {
console.log('ready');

// Pseudocode:

// 1.  Create state object
// What is contained in the state object:
// - item name

   // var initialItems = [apples, organges, etc./]
    var state = {
        items: [
            {name: "apples", checked: false},
            {name: "oranges", checked: false},
            {name: "milk", checked: true},
            {name: "bread", checked: false}
        ]
    };


// 2.  Functions that modify the state object
    function addItem(state, item){
        var newItem = {name: item, checked:false};
        state.items.push(newItem);
        return state;
    }


    // function toggleItemCheck(state, item) {
    //     // - check / uncheck
    //     // state.items[index of item].checked = toggle true/false
    //     return state;
    // }


    // function deleteItem(state, item){
    //    // - remove (delete)
    //     // array.splice(*where to start deleting*, how many elements to delete = 1)
    //     return state;
    // }


// 3.  Functions that render the state
//  -- jQuery methods that updates the DOM
// pass in pointer to the 'shopping-list'


//<li id="apples">apples</li>
    function renderList(state, element) {
        var itemsHTML = state.items.map(function(item) {
            return '<li>' + item + '</li>';
        });
        element.html(itemsHTML);
    };


// 4.  Event listeners that trigger the previous functions

console.log('pre-listner');
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    console.log('hi');
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

// $('.shopping-item-toggle').click(function(event) {
//     toggleItemCheck(state, $(event.currentTarget).text() );
//     renderList(state, $('.shopping-list'));
// });

// $('.shopping-item-delete').click(function(event) {
//     deleteItem(state, $(event.currentTarget).text() );
//     renderList(state, $('.shopping-list'));
// });


// Final output goal:
// The user being able to create a shopping list and edit and update the shopping list
// -- when user submits a new item, it's added to the list
// -- when user takes an action on an item, it's reflected on the list
  

});








