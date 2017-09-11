(function () {
  'use strict';

  // Meetings controller
  angular
    .module('meetings')
    .controller('MeetingsController', MeetingsController);

  MeetingsController.$inject = ['$scope', '$state', '$window', 'Authentication','MeetingsService','UsersService'];

  function MeetingsController($scope, $state, $window, Authentication,meeting,user) {

    //var mc = this;
    var mc = this;
    if($state.params){
      mc.meetingDate=$state.params.meetingId;
    }

    mc.authentication = Authentication;
    mc.meeting = meeting;
    mc.user=user;
    mc.error = null;
    mc.form = {};
    mc.remove = remove;
    mc.save = save;
    mc.test=test;
    mc.fetch=fetch;
    mc.goHome=goHome;

    //mc.upcomingmeetings = meeting.get();//.query();
    /*meeting.get()
			.success(function(data) {
				mc.meetings = data;
				//$scope.loading = false;
			});*/
      fetch();
      /*Zoom.login({email:"cheryl@supportingmamas.org",password:"Supporting2017"},function(data){
            console.log("sucesssss"+JSON.stringify(data));
            Zoom.listMeeting({page_size:15,page_number:1},
          function(data){
            mc.meetingdata=angular.copy(data.meetings);
            for(var i=0;i< mc.meetingdata.length;i++){
              if((mc.meetingdata[i].start_time=="")||(Date.now()>new Date(mc.meetingdata[i].start_time).getTime())){
                 mc.meetingdata.splice(i,1);
                 i=i-1;
              }
              else{
                mc.meetingdata[i].start_time=new Date(mc.meetingdata[i].start_time).toString();
              }

            }
            $scope.$apply();

           })
      })*/

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

					});
          $scope.$apply();

    }
     function test(data,date) {
       console.log(data);
       var str='{"id":"' +data+'"}';
       user.addMeeting(str);
       /*user.getMeetingList(function(data){
         mc.registeredmeetings = data.meetings;
       }
     );*/
       //$scope.$apply();
       $state.go('meetings.view', {
         meetingId: date
       });

     }

     function goHome() {
       $state.go('home');
     }

     function remove(data) {
       console.log(data);
       var str='{"id":"' +data+'"}';
       user.deleteMeeting(str);
       location.reload();

     }
     function fetch() {
       user.getMeetingList(function(data){
         mc.registeredmeetings = data.meetings;

         user.logintozoom(function(data){
               mc.meetingdata=angular.copy(data.meetings);
               for(var i=0;i< mc.meetingdata.length;i++){
                 if((mc.meetingdata[i].start_time=="")||(Date.now()>new Date(mc.meetingdata[i].start_time).getTime())){

                   if(mc.registeredmeetings!=undefined){
                   for(var j=0;j< mc.registeredmeetings.length;j++){
                     if(i==-1) break;
                     if(j==-1) break;
                     if(mc.registeredmeetings[j].id==mc.meetingdata[i].id){
                       mc.registeredmeetings[j]=mc.meetingdata[i];
                       mc.registeredmeetings.splice(j,1);
                       j=j-1;
                     }
                   }
                 }

                    mc.meetingdata.splice(i,1);
                    i=i-1;
                 }
                 else{
                   mc.meetingdata[i].start_time=new Date(mc.meetingdata[i].start_time).toString();
                   if(mc.registeredmeetings!=undefined){
                   for(var j=0;j< mc.registeredmeetings.length;j++){
                     if(i==-1) break;
                     if(mc.registeredmeetings[j].id==mc.meetingdata[i].id){
                       mc.registeredmeetings[j]=mc.meetingdata[i];
                       mc.meetingdata.splice(i,1);
                       i=i-1;
                     }
                   }
                 }

                 }

               }
               $scope.$apply();

            //  })
         })
       })
     }

  }
}());
