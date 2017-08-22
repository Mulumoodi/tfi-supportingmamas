(function () {
  'use strict';

  angular
    .module('meetings')
    .controller('MeetingsListController', MeetingsListController);

  MeetingsListController.$inject = ['MeetingsService','Authentication'];

  function MeetingsListController(MeetingsService,Authentication) {
    var vm = this;
    var mc = this;

    vm.meetings = MeetingsService.get();//.query();
    MeetingsService.get()
			.success(function(data) {
				vm.meetings = data;
				//$scope.loading = false;
			});

      /*Zoom.login({email:"cheryl@supportingmamas.org",password:"Supporting2017"},function(data){
            console.log("sucesssss"+JSON.stringify(data));

            Zoom.listMeeting({page_size:15,page_number:1},
          function(data){
            mc.meetingdata=data.meetings;
            //mc.save(true);
           }
         )
          })*/


          //mc.authentication = Authentication;
          //mc.meeting = MeetingsService;
          //mc.error = null;
          //mc.form = {};
          //mc.remove = remove;
          //mc.save = save;
          // Remove existing Meeting
          /*function remove() {
            if ($window.confirm('Are you sure you want to delete?')) {
              mc.meeting.$remove($state.go('meetings.list'));
            }
          }*/

          // Save Meeting
          /*function save(isValid) {
            //mc.meeting=mc.meeting.newMeeting();
            if (!isValid) {
              $scope.$broadcast('show-errors-check-validity', 'mc.form.meetingForm');
              return false;
            }

            // TODO: move create/update logic to service
            if (mc.meeting._id) {
              mc.meeting.update(successCallback, errorCallback);
            } else {
              mc.meeting.save(successCallback, errorCallback);
            }

            function successCallback(res) {
              $state.go('meetings.view', {
                meetingId: res._id
              });
            }

            function errorCallback(res) {
              mc.error = res.data.message;
            }
          }*/


  }
}());
