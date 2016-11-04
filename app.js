$(document).ready(function () {
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


    function deleteItem(state, item){
        console.log('deleteItem item parameter: ', item);

        // array.splice(*where to start deleting*, how many elements to delete = 1)



        return state;
    }


    // 3.  Functions that render the state
    //  -- jQuery methods that updates the DOM
    // pass in pointer to the 'shopping-list'


    //<li id="apples">apples</li>
    function renderList(state, element) {
        
        var itemsHTML = state.items.map(function(item) {
            
            var thisItem = '<li><span class="shopping-item">' + item.name + '</span>' + 
            '<div class="shopping-item-controls"><button class="shopping-item-toggle">'+
            '<span class="button-label">check</span></button>\n<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span></button></div></li>';

            return thisItem;
        });

        element.html(itemsHTML);
    };


    // 4.  Event listeners that trigger the previous functions

    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        var newItem = $('#shopping-list-entry').val();
        addItem(state, newItem);
        renderList(state, $('.shopping-list'));
    });

    // $('.shopping-item-toggle').click(function(event) {
    //     toggleItemCheck(state, $(event.currentTarget).text() );
    //     renderList(state, $('.shopping-list'));
    // });

    $('.shopping-item-delete').click(function(event) {
        console.log('...inside delete listener...');

        var itemToDelete = $(event.target).closest('span');

        console.log(event.target);
        console.log(event.currentTarget);
        debugger;


        deleteItem(state, itemToDelete );
        renderList(state, $('.shopping-list') /*fdsfasd*/);
    });


    // Final output goal:
    // The user being able to create a shopping list and edit and update the shopping list
    // -- when user submits a new item, it's added to the list
    // -- when user takes an action on an item, it's reflected on the list
  

});








