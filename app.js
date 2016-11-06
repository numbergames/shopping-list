$(document).ready(function () {

  // 1.  The state object
  var state = {
    items: [
      {name: "apples", checked: false},
      {name: "oranges", checked: false},
      {name: "milk", checked: true},
      {name: "bread", checked: false}
    ],

    itemIndex: function (itemName) {
      return this.items.findIndex(element => element.name === itemName)
    }
  };

  // 2.  Functions that modify state
  function addItem(state, item){
    var newItem = {name: item, checked: false};
  
    state.items.push(newItem);
  }

  function toggleItem(state, item) {
    // var index = itemIndex(state, item);
    var index = state.itemIndex(item);

    state.items[index].checked = state.items[index].checked 
      ? false
      : true;
  }

  function deleteItem(state, item){
    var index = state.itemIndex(item);

    state.items.splice(index, 1);
  }

  // 3.  Functions that generate state
  function generateList(state, element) {

    var itemsHTML = state.items.map(function(item) {
      var toggleClass = item.checked 
        ? ' shopping-item__checked' 
        : '';

      var thisItem = 
        '<li>' + 
          '<span class="shopping-item' + toggleClass + '">' + 
            item.name + '</span>' + 
          '<div class="shopping-item-controls">' + 
            '<button class="shopping-item-toggle">' +
              '<span class="button-label">check</span>' + 
            '</button>\n' + 
            '<button class="shopping-item-delete">' +
              '<span class="button-label">delete</span>' +
              '</button>' +
          '</div>' +
        '</li>';

      return thisItem;
    });

    return itemsHTML;
  };

  // 4.  Event listeners that trigger the previous functions
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    var newItem = $('#shopping-list-entry').val();

    if (!newItem.length) { // don't add empty items
      return;
    }

    addItem(state, newItem);
    $('.shopping-list').html(generateList(state));
    event.target.reset();
  });

  // Attached to the parent preventing overwriting on render
  $('.shopping-list')
    .on('click', '.shopping-item-toggle', function(event) {
      var itemToToggle = $(event.target).closest('li')
        .find('.shopping-item').text();

      toggleItem(state, itemToToggle);
      $('.shopping-list').html(generateList(state));
    })
    .on('click', '.shopping-item-delete', function(event) {
      var itemToDelete = $(event.target).closest('li')
        .find('.shopping-item').text();

      deleteItem(state, itemToDelete);
      $('.shopping-list').html(generateList(state));
    });
});
