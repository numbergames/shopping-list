$(document).ready(function () {

  var state = (function generateState() {
    var items = [
      {name: "apples", checked: false},
      {name: "oranges", checked: false},
      {name: "milk", checked: true},
      {name: "bread", checked: false}
    ];

    var _itemIndex = itemName => items.findIndex(
      item => item.name === itemName);

    function addItem(itemName) { 
      return items.push({name: itemName, checked: false});
    }

    function toggleItem (itemName) {
      var index = _itemIndex(itemName);

      items[index].checked = state.items[index].checked ? false : true;
    }

    function deleteItem(itemName) {
      items.splice(_itemIndex(itemName), 1);
    }

    function generateList() {
      var itemsHTML = items.map(function(item) {
        var checkedClass = item.checked ? ' shopping-item__checked' : '';

        return (
          '<li>' + 
            '<span class="shopping-item' + checkedClass + '">' + 
              item.name + '</span>' + 
            '<div class="shopping-item-controls">' + 
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' + 
              '</button>\n' + 
              '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
                '</button>' +
            '</div>' +
          '</li>'
        );
      });

      return itemsHTML.join("\n");
    }

    return {
      items,
      addItem,
      toggleItem,
      deleteItem,
      generateList
    };
  }());

  // Listeners
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    var newItem = $('#shopping-list-entry').val();

    if (newItem.length) { // ignore if blank (do checks in addItem() instead?)
      state.addItem(newItem);
      $('.shopping-list').html(state.generateList());
      event.target.reset();
    }
  });

  var getButtonItem = (event) => 
    $(event.target).closest('li').find('.shopping-item').text();

  // Attached to the parent preventing overwrite on render
  $('.shopping-list')

    .on('click', '.shopping-item-toggle', function(event) {
      state.toggleItem(getButtonItem(event));
      $('.shopping-list').html(state.generateList());
    })

    .on('click', '.shopping-item-delete', function(event) {
      state.deleteItem(getButtonItem(event));
      $('.shopping-list').html(state.generateList());
    });
});
