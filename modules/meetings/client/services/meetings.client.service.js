// Meetings service used to communicate Meetings REST endpoints
(function () {
  'use strict';

  angular
    .module('meetings')
    .factory('MeetingsService', MeetingsService);

  MeetingsService.$inject = ['$resource'];

  function MeetingsService($resource) {
    var Meetings = $resource('/api/meetings', {}, {
      update: {
        method: 'PUT'
      },
      save: {
        method: 'POST',
        url: '/api/meetings'
      }
    });

  /*  angular.extend(Meetings, {
      save: function (credentials) {
        return this.update(credentials).$promise;
      }
    });*/

    return Meetings;
  }

}());
