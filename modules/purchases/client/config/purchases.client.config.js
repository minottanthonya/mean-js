(function () {
  'use strict';

  angular
    .module('purchases')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Purchases',
      state: 'purchases',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'purchases', {
      title: 'List Purchases',
      state: 'purchases.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'purchases', {
      title: 'Create Purchase',
      state: 'purchases.create',
      roles: ['user']
    });
  }
})();
