$(document).ready(function () {

  // 1.  The state object & methods
  var state = {
    items: [
      {name: "apples", checked: false},
      {name: "oranges", checked: false},
      {name: "milk", checked: true},
      {name: "bread", checked: false}
    ],

    itemIndex: function (itemName) {
      return this.items.findIndex(element => element.name === itemName)
    },

    addItem: function (itemName) {
      var newItem = {name: itemName, checked: false};
  
      this.items.push(newItem);
    },

    toggleItem: function (itemName) {
      var index = this.itemIndex(itemName);

      this.items[index].checked = state.items[index].checked 
        ? false
        : true;
    },

    deleteItem: function (itemName) {
      var index = this.itemIndex(itemName);

      this.items.splice(index, 1);
    },

    generateList: function () {
      var itemsHTML = this.items.map(function(item) {
        var toggleClass = item.checked 
          ? ' shopping-item__checked' 
          : '';

        return '<li>' + 
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
      });

      return itemsHTML;
    }
  };

  // Event listeners that trigger the previous functions
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    var newItem = $('#shopping-list-entry').val();

    if (newItem.length) { // ignore if blank
      state.addItem(newItem);
      $('.shopping-list').html(state.generateList());
      event.target.reset();
    }
  });

  // Attached to the parent preventing overwrite on render
  $('.shopping-list')

    .on('click', '.shopping-item-toggle', function(event) {
      var itemToToggle = $(event.target).closest('li')
        .find('.shopping-item').text();

      state.toggleItem(itemToToggle);
      $('.shopping-list').html(state.generateList());
    })

    .on('click', '.shopping-item-delete', function(event) {
      var itemToDelete = $(event.target).closest('li')
        .find('.shopping-item').text();

      state.deleteItem(itemToDelete);
      $('.shopping-list').html(state.generateList());
    });

});
