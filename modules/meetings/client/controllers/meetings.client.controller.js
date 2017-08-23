(function () {
  'use strict';

  // Meetings controller
  angular
    .module('meetings')
    .controller('MeetingsController', MeetingsController);

  MeetingsController.$inject = ['$scope', '$state', '$window', 'Authentication','MeetingsService'];

  function MeetingsController($scope, $state, $window, Authentication,meeting) {
    //var mc = this;
    var mc = this;

    mc.authentication = Authentication;
    mc.meeting = meeting;
    mc.error = null;
    mc.form = {};
    mc.remove = remove;
    mc.save = save;

    //mc.upcomingmeetings = meeting.get();//.query();
    meeting.get()
			.success(function(data) {
				mc.meetings = data;
				//$scope.loading = false;
			});
      Zoom.login({email:"cheryl@supportingmamas.org",password:"Supporting2017"},function(data){
            console.log("sucesssss"+JSON.stringify(data));
            Zoom.listMeeting({page_size:15,page_number:1},
          function(data){
            mc.meetingdata=data.meetings;
            $scope.$apply();

           })
      })

      function init(){
        console.log("Initializing service");
      }
    // Remove existing Meeting
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        mc.meeting.$remove($state.go('meetings.list'));
      }
    }

    // Save Meeting
    function save(isValid) {
      var sampledata='{"name":"testName","leader":"testLeader"}'
        meeting.save(sampledata)
					.success(function(data) {
						//$scope.loading = false;
						//$scope.formData = {}; // clear the form so our user is ready to enter another
						//$scope.todos = data; // assign our new list of todos
					});

    }




  }
}());