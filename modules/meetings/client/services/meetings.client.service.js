// Meetings service used to communicate Meetings REST endpoints
(function () {
  'use strict';

  angular
    .module('core')
    .factory('MeetingsService', ['$http',function($http) {

    return{
      update:function() {
        return $http.post('/api/meetings');
        //method: 'PUT'
      },
      save: function(data){
        return $http.post('/api/meetings',data);
        //method: 'POST',
        //url: '/api/meetings'
      },
      get: function(){
        return $http.get('/api/meetings');
        //method: 'POST',
        //url: '/api/meetings'
      }
    };
  }])


  }

());
