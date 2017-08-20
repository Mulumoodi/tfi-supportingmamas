(function () {
  'use strict';

  angular
    .module('meetings')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Meetings',
      state: 'meetings',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'meetings', {
      title: 'List Meetings',
      state: 'meetings.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'meetings', {
      title: 'Create Meeting',
      state: 'meetings.create',
      roles: ['user']
    });
  }
}());
